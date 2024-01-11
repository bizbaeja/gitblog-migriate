import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { db } from "@/lib/db"
export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

  if (!WEBHOOK_SECRET) {
    throw new Error('WEBHOOK_SECRET을 .env.local에 설정해주세요.')
  }
    // headers 를 가져옴
    const headerPayload = headers();
    const svix_id = headerPayload.get("svix-id");
    const svix_timestamp = headerPayload.get("svix-timestamp");
    const svix_signature = headerPayload.get("svix-signature"); 

    // headers 가 없으면 에러를 던짐
    if (!svix_id || !svix_timestamp || !svix_signature) {
      return new Response('에러가 발생했습니다, -- svix 헤더에 문제가 있습니다.', {
        status: 400
      })
    }
        // body 를 가져옴
    const payload = await req.json()
    const body = JSON.stringify(payload);

    // 새로운 svix
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt: WebhookEvent

    // headers 와 body 를 검증함
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }

  const eventType = evt.type;

  if(eventType === "user.created") {
    await db.user.create({
      data:{
        externalUserId : payload.data.id,
        username : payload.data.username,
        imageUrl : payload.data.image_url,

      }
    })
  }
  if (eventType === "user.updated") {
    await db.user.update({
      where: {
        externalUserId: payload.data.id,
      },
      data: {
        username: payload.data.username,
        imageUrl: payload.data.image_url,
      },
    });
  }

  if (eventType === "user.deleted") {

    await db.user.delete({
      where: {
        externalUserId: payload.data.id,
      },
    });
  }
   return new Response('', { status: 200 })

}

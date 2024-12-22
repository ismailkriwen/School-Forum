"use server";

import { prisma } from "@/lib/db";

const grabInfo = async () => {
  const topics = await prisma.topic.count();
  const posts = await prisma.post.count();
  const users = await prisma.user.count();
  const latest = await prisma.user.findMany({
    orderBy: { id: "desc" },
    take: 1,
  });

  return { topics, posts, users, latest: latest[0] };
};

export { grabInfo };

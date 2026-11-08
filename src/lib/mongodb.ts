import { MongoClient, type Collection } from "mongodb";

export type ClickDoc = {
  _id: string; // 링크 id
  count: number;
};

// 서버리스/개발 서버 핫리로드에서도 연결을 하나만 재사용하도록 전역에 캐시합니다.
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다. .env.local을 확인하세요.");
    }
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 연결 실패 시 캐시를 비워 다음 요청에서 다시 시도합니다.
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo._mongoClientPromise;
}

/** linknamu DB의 clicks 컬렉션 (문서: { _id: 링크 id, count }) */
export async function getClicksCollection(): Promise<Collection<ClickDoc>> {
  const client = await getClient();
  return client.db("linknamu").collection<ClickDoc>("clicks");
}

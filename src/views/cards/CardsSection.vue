<script setup>
import AdminCreateCards from "../../components/Cards/AdminCreateCards.vue";
import UserCreateCards from "../../components/Cards/UserCreateCards.vue";
import { adminCardsData, userCardsData } from "./cardsData.js";

// Props 정의
const props = defineProps({
  selectedSubCategory: {
    type: String,
    default: "admin-cards",
  },
});

// 이벤트 핸들러
const handleShopClick = (shop) => {
  console.log("Shop clicked:", shop);
  alert(`${shop.title} 클릭됨!`);
};

const handleParticipantClick = (participant) => {
  console.log("Participant clicked:", participant);
  alert(`${participant.name} 작가 클릭됨!`);
};
</script>

<template>
  <div class="space-y-8">
    <!-- AdminCreateCards 컴포넌트 -->
    <div
      v-if="selectedSubCategory === 'admin-cards'"
      class="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 class="text-xl font-bold mb-4 text-black">
        AdminCreateCards 컴포넌트
      </h2>
      <p class="text-gray-600 mb-6">
        관리자용 카드 컴포넌트 - 높이 자동 맞춤, 스크롤 네비게이션 지원
      </p>

      <AdminCreateCards
        :shops="adminCardsData"
        @shop-click="handleShopClick"
        @participant-click="handleParticipantClick"
      />
    </div>

    <!-- UserCreateCards 컴포넌트 -->
    <div
      v-if="selectedSubCategory === 'user-cards'"
      class="bg-white rounded-lg shadow-lg p-6"
    >
      <h2 class="text-xl font-bold mb-4">UserCreateCards 컴포넌트</h2>
      <p class="text-gray-600 mb-6">
        사용자용 카드 컴포넌트 - Headless UI 모달 포함, 동적 그리드
      </p>

      <UserCreateCards
        :shops="userCardsData"
        @shop-click="handleShopClick"
        @participant-click="handleParticipantClick"
      />
    </div>

    <!-- 컴포넌트 정보 및 사용법 -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-xl font-bold mb-4 text-black">
        {{
          selectedSubCategory === "admin-cards"
            ? "AdminCreateCards"
            : "UserCreateCards"
        }}
        정보
      </h2>

      <div
        v-if="selectedSubCategory === 'admin-cards'"
        class="prose prose-sm max-w-none"
      >
        <h3 class="text-lg font-semibold mb-2">특징</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>카드 높이 자동 맞춤 (같은 행의 카드들이 동일한 높이)</li>
          <li>참여작가 5명 이상일 때 스크롤 네비게이션 지원</li>
          <li>좌우 스크롤 버튼으로 부드러운 스크롤 기능</li>
          <li>관리자 전용 UI/UX 최적화</li>
        </ul>

        <h3 class="text-lg font-semibold mb-2">사용 예시</h3>
        <div class="bg-gray-100 p-3 rounded text-sm font-mono text-gray-700">
          &lt;AdminCreateCards<br />
          :shops="adminCardsData"<br />
          @shop-click="handleShopClick"<br />
          @participant-click="handleParticipantClick"<br />
          /&gt;
        </div>
      </div>

      <!-- UserCreateCards 정보 -->
      <div
        v-if="selectedSubCategory === 'user-cards'"
        class="prose prose-sm max-w-none"
      >
        <h3 class="text-lg font-semibold mb-2">특징</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700 mb-4">
          <li>Headless UI 모달 컴포넌트 통합</li>
          <li>동적 그리드 시스템 (1-6열 반응형)</li>
          <li>4열 그리드 기본 설정</li>
          <li>모바일 친화적 반응형 디자인</li>
          <li>사용자 친화적 인터페이스</li>
        </ul>

        <h3 class="text-lg font-semibold mb-2">사용 예시</h3>
        <div class="bg-gray-100 p-3 rounded text-sm font-mono text-gray-700">
          &lt;UserCreateCards<br />
          :shops="userCardsData"<br />
          :itemsPerRow="4"<br />
          @shop-click="handleShopClick"<br />
          @participant-click="handleParticipantClick"<br />
          /&gt;
        </div>
      </div>

      <div class="prose">
        <h3 class="text-lg font-semibold mb-2 mt-6">Props</h3>
        <div class="overflow-x-auto text-gray-700">
          <table
            class="min-w-full table-auto border-collapse border border-gray-300"
          >
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">Prop</th>
                <th class="border border-gray-300 px-4 py-2 text-left">Type</th>
                <th class="border border-gray-300 px-4 py-2 text-left">
                  Default
                </th>
                <th class="border border-gray-300 px-4 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono text-sm">
                  shops
                </td>
                <td class="border border-gray-300 px-4 py-2">Array</td>
                <td class="border border-gray-300 px-4 py-2">[]</td>
                <td class="border border-gray-300 px-4 py-2">
                  카드 데이터 배열
                </td>
              </tr>
              <tr v-if="selectedSubCategory === 'user-cards'">
                <td class="border border-gray-300 px-4 py-2 font-mono text-sm">
                  itemsPerRow
                </td>
                <td class="border border-gray-300 px-4 py-2">Number</td>
                <td class="border border-gray-300 px-4 py-2">4</td>
                <td class="border border-gray-300 px-4 py-2">
                  한 행에 표시할 카드 수 (1-6)
                </td>
              </tr>
            </tbody>
          </table>
          <h3 class="text-lg font-semibold mb-2 mt-6">Events</h3>
          <div class="overflow-x-auto">
            <table
              class="min-w-full table-auto border-collapse border border-gray-300"
            >
              <thead>
                <tr class="bg-gray-50">
                  <th class="border border-gray-300 px-4 py-2 text-left">
                    Event
                  </th>
                  <th class="border border-gray-300 px-4 py-2 text-left">
                    Payload
                  </th>
                  <th class="border border-gray-300 px-4 py-2 text-left">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="border border-gray-300 px-4 py-2 font-mono text-sm"
                  >
                    @shop-click
                  </td>
                  <td class="border border-gray-300 px-4 py-2">shop object</td>
                  <td class="border border-gray-300 px-4 py-2">
                    카드 클릭 시 발생
                  </td>
                </tr>
                <tr>
                  <td
                    class="border border-gray-300 px-4 py-2 font-mono text-sm"
                  >
                    @participant-click
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    participant object
                  </td>
                  <td class="border border-gray-300 px-4 py-2">
                    참여작가 클릭 시 발생
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Mockup Data 예시 -->
        <h3 class="text-lg font-semibold mb-2 mt-6">Mockup Data 예시</h3>

        <!-- Admin Cards 데이터 -->
        <div
          v-if="selectedSubCategory === 'admin-cards'"
          class="mb-6 bg-gray-100 rounded-lg p-4 text-left"
        >
          <h4 class="font-bold text-gray-800 mb-3">Admin Cards 데이터:</h4>
          <pre class="text-sm text-gray-800 overflow-x-auto">
const adminCardsData = [
  {
    id: 1,
    title: "여름이었다 콜라보방은 두줄까지만보이게해.",
    badge: "마켓종료",
    badgeColor: "gray",
    description: "일본 고등학생의 여름방학 같은 분위기로 콜라보 썸머팩을 준비할 예정입니다.",
    period: "모집기간: 2025.06.11~2025.07.01",
    image: null,
    participants: [
      { id: 1, name: "나초", avatar: null },
      { id: 2, name: "치즈", avatar: null },
      { id: 3, name: "글로리아", avatar: null }
    ]
  },
  {
    id: 2,
    title: "가을 컬렉션 특별전",
    badge: "마켓오픈",
    badgeColor: "yellow",
    description: "일본 고등학생의 여름방학 같은 분위기로 콜라보 썸머팩을 준비할 예정입니다.",
    period: "모집기간:2025.07.01~2025.07.31",
    image: null,
    participants: [
      { id: 1, name: "나초", avatar: null },
      { id: 2, name: "치즈", avatar: null }
    ]
  }
];
        </pre
          >
        </div>

        <!-- User Cards 데이터 -->
        <div
          v-if="selectedSubCategory === 'user-cards'"
          class="mb-6 bg-gray-100 rounded-lg p-4 text-left"
        >
          <h4 class="font-bold text-gray-800 mb-3">User Cards 데이터:</h4>
          <pre class="text-sm text-gray-800 overflow-x-auto">
const userCardsData = [
  {
    id: 1,
    title: "서랍배 v.20 스팸프투어 하심 분",
    description: "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
    badge: "모집중",
    badgeColor: "blue",
    period: "모집기간: 2025.06.11~2025.07.01",
    hashtags: "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      { id: 1, name: "하찌네(방장)", avatar: null },
      { id: 2, name: "참여자 (5/10)", avatar: null }
    ]
  },
  {
    id: 2,
    title: "서랍배 v.20 스팸프투어 하심 분",
    description: "귀여운 그림체에 정말 작업 하시는 분, 다구 스티커, 파티콘이나 대표 가능, 부드러운 색감 쓰시는 분 구해요",
    badge: "모집마감",
    badgeColor: "gray",
    period: "모집기간: 2025.06.11~2025.07.01",
    hashtags: "#가을 #시원함 #가을맘 #스팸프투어 #리얼 #파티콘 #스토리 #부들",
    image: "https://via.placeholder.com/280x200/f0f8ff/4a90e2?text=6월통판",
    participants: [
      { id: 1, name: "하찌네(방장)", avatar: null },
      { id: 2, name: "참여자 (1/10)", avatar: null }
    ]
  }
];
        </pre
          >
        </div>

        <div class="mt-4 bg-blue-50 rounded-lg p-4 text-left">
          <h4 class="font-bold text-blue-800 mb-2">TypeScript 인터페이스:</h4>
          <pre class="text-sm text-blue-700">
interface Participant {
  id: number;
  name: string;
  avatar: string | null;
}

interface Shop {
  id: number;
  title: string;
  badge: string;
  badgeColor: 'blue' | 'green' | 'yellow' | 'gray';
  description: string;
  period: string;
  image: string | null;
  participants: Participant[];
  hashtags?: string; // UserCards에만 존재
}
        </pre
          >
        </div>

        <h3 class="text-lg font-semibold mb-2 mt-6">Events</h3>
        <div class="overflow-x-auto">
          <table
            class="min-w-full table-auto border-collapse border border-gray-300"
          >
            <thead>
              <tr class="bg-gray-50">
                <th class="border border-gray-300 px-4 py-2 text-left">
                  Event
                </th>
                <th class="border border-gray-300 px-4 py-2 text-left">
                  Payload
                </th>
                <th class="border border-gray-300 px-4 py-2 text-left">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono text-sm">
                  @shop-click
                </td>
                <td class="border border-gray-300 px-4 py-2">shop object</td>
                <td class="border border-gray-300 px-4 py-2">
                  카드 클릭 시 발생
                </td>
              </tr>
              <tr>
                <td class="border border-gray-300 px-4 py-2 font-mono text-sm">
                  @participant-click
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  participant object
                </td>
                <td class="border border-gray-300 px-4 py-2">
                  참여작가 클릭 시 발생
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Cards 섹션 전용 스타일 */
.prose h3 {
  @apply text-gray-900;
}

.prose ul {
  @apply text-gray-600;
}

table {
  @apply text-sm;
}
</style>

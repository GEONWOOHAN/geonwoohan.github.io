const posts = [
  {
    title: "[CTF 세미나] Tcache Poisoning 학습",
    category: "동아리",
    date: "2026.05.12",
    summary: "heap chunk metadata, tcache bin, UAF 기반 fd 조작 흐름을 세미나 형태로 정리했습니다.",
    tags: ["CTF", "Tcache", "Heap"],
    url: "https://blog.naver.com/daily_log_coding/224283495719",
  },
  {
    title: "[Dreamhack] House of Pumpkin Write-up",
    category: "CTF",
    date: "2026.05.12",
    summary: "glibc 2.23 old heap 기법과 큰 가상 메모리 mapping을 이용하는 pwnable 풀이입니다.",
    tags: ["DreamHack", "Pwnable"],
    url: "https://blog.naver.com/daily_log_coding/224283222183",
  },
  {
    title: "[Dreamhack] Flip and Probe Write-up",
    category: "CTF",
    date: "2026.05.12",
    summary: "한 chunk당 한 bit 제한처럼 보이는 조건을 note table index 관점에서 우회한 풀이입니다.",
    tags: ["DreamHack", "Heap"],
    url: "https://blog.naver.com/daily_log_coding/224283112258",
  },
  {
    title: "[Dreamhack] HEAP_AEG Write-up",
    category: "CTF",
    date: "2026.05.12",
    summary: "원격에서 내려오는 ELF를 자동 분석하고 stage flag를 제출하는 heap AEG 문제를 정리했습니다.",
    tags: ["DreamHack", "AEG"],
    url: "https://blog.naver.com/daily_log_coding/224283087412",
  },
  {
    title: "[대회] Midnight Sun CTF 2026",
    category: "대회",
    date: "2026.05.12",
    summary: "1294팀 중 11등, 전체 19문제 solve 흐름과 개인 풀이 4문제를 기록했습니다.",
    tags: ["CTF", "Midnight Sun"],
    url: "https://blog.naver.com/daily_log_coding/224282796223",
  },
  {
    title: "[Dreamhack] shiftalloc Write-up",
    category: "CTF",
    date: "2026.05.12",
    summary: "shift 연산으로 실제 malloc 크기와 논리적 size가 어긋나는 지점을 이용한 풀이입니다.",
    tags: ["DreamHack", "Pwnable"],
    url: "https://blog.naver.com/daily_log_coding/224282655907",
  },
  {
    title: "[대회] ACTF 2026",
    category: "대회",
    date: "2026.05.11",
    summary: "팀으로 25/26문제를 해결하고 9개의 first blood를 기록한 대회 회고입니다.",
    tags: ["ACTF", "CTF"],
    url: "https://blog.naver.com/daily_log_coding/224282335105",
  },
  {
    title: "[논문 세미나] OpenProject",
    category: "동아리",
    date: "2026.05.11",
    summary: "OpenProject bug bounty kickoff로 대상 시스템을 읽는 방법과 분석 관점을 정리했습니다.",
    tags: ["Bug Bounty", "Seminar"],
    url: "https://blog.naver.com/daily_log_coding/224282142822",
  },
  {
    title: "[컨퍼런스] INC0GNITO 2026 참가 후기",
    category: "동아리",
    date: "2026.05.09",
    summary: "보안 컨퍼런스 참가 경험과 세션에서 얻은 내용을 기록했습니다.",
    tags: ["Conference"],
    url: "https://blog.naver.com/daily_log_coding/224279591930",
  },
  {
    title: "[스터디] OAuth 2.0과 OIDC",
    category: "동아리",
    date: "2026.05.08",
    summary: "소셜 로그인 뒤에서 실제로 일어나는 인증/인가 흐름을 스터디로 정리했습니다.",
    tags: ["OAuth", "OIDC"],
    url: "https://blog.naver.com/daily_log_coding/224278627714",
  },
  {
    title: "[실습] DPU Programming Using P4 - Lab 1",
    category: "연구",
    date: "2026.05.05",
    summary: "NVIDIA BlueField, DOCA, DPL, P4 기반 데이터패스 프로그래밍 실습 기록입니다.",
    tags: ["NVIDIA", "P4", "DPU"],
    url: "https://blog.naver.com/daily_log_coding/224276032131",
  },
  {
    title: "[공부] P4 Language Support in DPL 내용 정리",
    category: "연구",
    date: "2026.05.01",
    summary: "DPL이 지원하는 P4-16 언어 기능과 BlueField 하드웨어 제약을 정리했습니다.",
    tags: ["DOCA", "DPL", "P4"],
    url: "https://blog.naver.com/daily_log_coding/224271396826",
  },
  {
    title: "[공모전] 2026 미래혁신 아이디어 챌린지",
    category: "연구",
    date: "2026.04.30",
    summary: "AI 기반 우선 방문 의사결정 지원 시스템 '살피미' 아이디어를 팀으로 제안했습니다.",
    tags: ["AI", "Social Innovation"],
    url: "https://blog.naver.com/daily_log_coding/224270769841",
  },
];

const postList = document.querySelector("#post-list");
const filterButtons = document.querySelectorAll(".filter-button");

function renderPosts(filter = "all") {
  const filteredPosts =
    filter === "all" ? posts : posts.filter((post) => post.category === filter);

  postList.innerHTML = filteredPosts
    .map(
      (post) => `
        <article class="post-card">
          <div class="post-meta">
            <span>${post.category}</span>
            <time>${post.date}</time>
          </div>
          <h3>${post.title}</h3>
          <p>${post.summary}</p>
          <div class="tag-list" aria-label="${post.title} 태그">
            ${post.tags.map((tag) => `<span class="post-tag">${tag}</span>`).join("")}
          </div>
          <a href="${post.url}">Read log</a>
        </article>
      `
    )
    .join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-pressed", "false");
    });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    renderPosts(button.dataset.filter);
  });
});

renderPosts();

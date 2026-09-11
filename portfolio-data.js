/**
 * Personal Portfolio Data Configuration
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "홍길동",
    englishName: "Gildong Hong",
    title: "성장하는 풀스택 웹 개발자",
    shortBio: "사용자 경험 중심의 효율적이고 확장 가능한 웹 서비스를 만드는 개발자입니다. 새로운 기술을 배우고 지속적으로 코드를 개선하는 과정에서 즐거움을 느낍니다.",
    typedHeadlines: [
      "성장하는 풀스택 웹 개발자 홍길동입니다.",
      "사용자 중심의 웹 서비스를 만들어 갑니다.",
      "깔끔한 코드와 효율적인 아키텍처를 지향합니다."
    ],
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    status: "재직중 / 이직 준비중",
    location: "서울특별시",
    email: "gildong.hong@example.com",
    phone: "010-1234-5678",
    github: "https://github.com",
    blog: "https://velog.io",
    linkedin: "https://linkedin.com",
    stats: {
      experienceYears: "2년+",
      projectsCount: "12+",
      techCount: "15+",
      commitCount: "1,200+"
    }
  },

  strengths: [
    {
      icon: "code",
      title: "효율적인 웹 서비스 구축",
      description: "React, Next.js, Node.js를 기반으로 빠르고 직관적인 사용자 인터페이스와 안정적인 API 백엔드를 개발합니다."
    },
    {
      icon: "layers",
      title: "클린 코드 모듈화",
      description: "가독성과 유지보수성이 높은 코드를 작성하며, 지속적인 코드 리뷰와 구조 개선을 중요하게 여깁니다."
    },
    {
      icon: "users",
      title: "원활한 부서 간 협업",
      description: "기획자, 디자이너, 마케터와 긴밀히 소통하며 비즈니스 목표와 기획 의도에 맞춘 최적의 결과물을 이끌어냅니다."
    },
    {
      icon: "zap",
      title: "빠른 학습 및 적용력",
      description: "새로운 기술 트렌드와 프레임워크를 신속히 습득하고 프로젝트 요구사항에 맞춰 적재적소에 도입합니다."
    }
  ],

  skills: {
    frontend: [
      { name: "JavaScript (ES6+)", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "HTML5 / CSS3", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "Tailwind CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Redux / Zustand", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" }
    ],
    backend: [
      { name: "Node.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python / FastAPI", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "RESTful API", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" }
    ],
    database: [
      { name: "MySQL", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Redis", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
    ],
    tools: [
      { name: "Git / GitHub", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Docker", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "AWS (S3, EC2)", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Figma", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Jira / Notion", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" }
    ]
  },

  experiences: [
    {
      company: "(주)에이비씨 솔루션",
      departmentRole: "웹개발팀 / 주임 개발자",
      period: "2023.03 ~ 재직중 (1년 6개월)",
      type: "정규직",
      description: "고객 관리 사내 SaaS 플랫폼 프론트엔드 및 백엔드 API 개발 담당",
      achievements: [
        "React 기반 대시보드 리뉴얼로 페이지 초기 로딩 속도 42% 개선 (3.2초 -> 1.8초)",
        "RESTful API 연동 및 공통 컴포넌트 라이브러리 구축으로 팀 개발 생산성 향상",
        "실시간 알림 시스템 (WebSocket / SSE) 도입하여 고객 문의 처리 시간 30% 단축",
        "Jest / React Testing Library 도입으로 핵심 단위 테스트 커버리지 75% 달성"
      ],
      techStack: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "MySQL", "Git"]
    },
    {
      company: "(주)디지털이노베이션",
      departmentRole: "서비스개발부 / 인턴 개발자",
      period: "2022.07 ~ 2023.01 (7개월)",
      type: "인턴",
      description: "이커머스 웹 애플리케이션 프론트엔드 파트 지원 및 퍼블리싱",
      achievements: [
        "모바일 웹 반응형 레이아웃 20여 개 페이지 제작 및 크로스 브라우징 이슈 해결",
        "장바구니 및 결제 프로세스 UI 개선 참여로 주문 전환율 8% 상승에 기여",
        "Figma 디자인 시스템을 기반으로 한 Reusable UI 컴포넌트 구축"
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "Vue.js", "SCSS", "Figma"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "스마트 업무 관리 & 협업 플랫폼 (TaskHub)",
      category: "web",
      period: "2023.10 ~ 2024.01 (4개월)",
      role: "프론트엔드 & 백엔드 개발 (팀 프로젝트 / 4인)",
      summary: "팀 단위 프로젝트 상태 관리, Kanban 칸반 보드 및 실시간 동시 수정 업무 관리 플랫폼",
      description: "직관적인 drag-and-drop 칸반 보드 인터페이스와 실시간 채팅/알림 기능을 갖춘 업무 협업 툴입니다. WebSocket을 이용한 상태 동기화 및 캘린더 연동 기능을 개발했습니다.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "HTML5 Drag and Drop API를 활용한 무단차 칸반 카드 이동 기능 구현",
        "Socket.io 기반 멀티유저 실시간 상태 업데이트 처리",
        "JWT 인증 및 Refresh Token 자동 갱신 인터셉터 구축"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      id: "project-2",
      title: "AI 기반 데일리 커스텀 뉴스 큐레이션 (NewsFeed)",
      category: "web",
      period: "2023.05 ~ 2023.08 (3개월)",
      role: "풀스택 개발 (개인 프로젝트)",
      summary: "사용자 관심 키워드 기반 AI 뉴스 요약 및 개별 추천 아티클 서비스",
      description: "OpenAI API를 연동하여 기사 원문을 3줄 요약하고, 카테고리별 뉴스를 크롤링하여 사용자에게 맞춤 추천하는 서비스입니다.",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Python BeautifulSoup / Selenium 기반 매일 500개 뉴스 기사 자동 수집 파이프라인 구축",
        "OpenAI GPT-3.5 API 연동으로 3줄 자동 요약 및 주요 키워드 태깅",
        "Next.js App Router & SSR 적용으로 구글 SEO 검색 노출 최적화"
      ],
      techStack: ["Next.js", "React", "Python", "FastAPI", "OpenAI API", "PostgreSQL"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      id: "project-3",
      title: "개발자 스터디 및 프로젝트 모임 매칭 웹 (DevMatch)",
      category: "web",
      period: "2022.11 ~ 2023.02 (3개월)",
      role: "프론트엔드 개발 리드 (팀 프로젝트 / 3인)",
      summary: "기술 스택 및 지역 기반 스터디원 모집 및 포트폴리오 리뷰 사이트",
      description: "개발자들이 스택별 스터디 그룹을 생성하고 참가 신청을 관리할 수 있는 모임 매칭 웹플랫폼입니다.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "카카오 지도 API 연동으로 오프라인 모임 장소 검색 및 마커 표시",
        "무한 스크롤(Intersection Observer) 적용으로 모집글 목록 경험 개선",
        "Zustand 전역 상태 관리를 통한 스택 필터 및 검색 기능 구현"
      ],
      techStack: ["React", "JavaScript", "Zustand", "Tailwind CSS", "Express", "MySQL"],
      githubUrl: "https://github.com",
      demoUrl: "https://example.com"
    }
  ],

  education: [
    {
      school: "한국대학교",
      degree: "컴퓨터공학과 / 학사 졸업",
      period: "2017.03 ~ 2022.02",
      gpa: "3.85 / 4.5",
      details: "자료구조, 알고리즘, 컴퓨터 네트워크, 데이터베이스, 운영체제 수강"
    }
  ],

  certificates: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2022.06",
      badge: "자격증"
    },
    {
      name: "SQLD (SQL 개발자)",
      issuer: "한국데이터산업진흥원",
      date: "2022.11",
      badge: "자격증"
    },
    {
      name: "웹 프론트엔드 부트캠프 6기 과정 수료",
      issuer: "패스트캠퍼스 / 코드스테이츠",
      date: "2022.01 ~ 2022.06",
      badge: "교육 수료"
    },
    {
      name: "해커톤 최우수상 (협업 툴 부문)",
      issuer: "소프트웨어진흥원",
      date: "2023.09",
      badge: "수상"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

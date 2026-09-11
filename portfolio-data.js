/**
 * Personal Portfolio Data Configuration
 * 사용자의 실제 이력서 스크린샷 기반으로 업데이트된 포트폴리오 데이터입니다.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "개발자",
    englishName: "Software Engineer",
    title: "사용자 가치를 창출하는 웹 개발자",
    shortBio: "안정적이고 확장 가능한 웹 서비스를 개발하는 소프트웨어 엔지니어입니다. 문제 해결 중심의 사고와 효율적인 코드 작성을 위해 끊임없이 배우고 도전합니다.",
    typedHeadlines: [
      "사용자 가치를 창출하는 웹 개발자입니다.",
      "안정적이고 확장 가능한 풀스택 서비스를 개발합니다.",
      "클린 코드와 체계적인 아키텍처 구축에 집중합니다."
    ],
    avatarUrl: "./user_profile.png",
    status: "구직중 / 이직 준비중",
    location: "서울특별시",
    email: "contact@example.com",
    phone: "010-0000-0000",
    github: "https://github.com/acoustjk",
    blog: "https://velog.io",
    linkedin: "https://linkedin.com",
    stats: {
      experienceYears: "3년+",
      projectsCount: "10+",
      techCount: "12+",
      commitCount: "1,500+"
    }
  },

  strengths: [
    {
      icon: "code",
      title: "웹 애플리케이션 개발",
      description: "React, Next.js, Node.js 및 다양한 웹 기술을 활용하여 고성능 UI와 안정적인 백엔드 시스템을 설계하고 구현합니다."
    },
    {
      icon: "layers",
      title: "아키텍처 설계 및 리팩토링",
      description: "재사용 가능한 컴포넌트 구조와 모듈화된 코드를 통해 시스템 유지보수성과 생산성을 크게 향상시킵니다."
    },
    {
      icon: "users",
      title: "팀 협업 및 커뮤니케이션",
      description: "기획, 디자인, 제품 팀과 유기적으로 소통하여 프로젝트 목표 달성 및 요구사항 구현을 주도합니다."
    },
    {
      icon: "zap",
      title: "성능 최적화 및 문제 해결",
      description: "웹 로딩 성능 최적화, 렌더링 병목 현상 개선 및 실시간 데이터 처리 문제 해결에 강점이 있습니다."
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
      { name: "AWS", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Figma", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Jira / Notion", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg" }
    ]
  },

  experiences: [
    {
      company: "주요 서비스 개발사 A",
      departmentRole: "개발팀 / 주임 개발자",
      period: "2022.03 ~ 2024.03 (2년 1개월)",
      type: "정규직",
      description: "웹 서비스 프론트엔드 및 API 개발 총괄",
      achievements: [
        "핵심 서비스 UI 컴포넌트 모듈화로 전사 개발 공수 35% 감소",
        "웹 로딩 및 랜더링 성능 최적화로 사용자 이탈률 20% 감소",
        "실시간 알림 및 상태 연동 기능 구현",
        "RESTful API 규격 설계 및 백엔드 서비스 연동",
        "신규 서비스 기능 기획 검토 및 프로젝트 요구사항 정의",
        "코드 리뷰 프로세스 도입 및 프론트엔드 코드 품질 향상",
        "단위 테스트 및 통합 테스트 환경 구축"
      ],
      techStack: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "MySQL", "Git"]
    },
    {
      company: "IT 솔루션 전문 기업 B",
      departmentRole: "서비스개발팀 / 개발자",
      period: "2021.05 ~ 2022.01 (9개월)",
      type: "정규직",
      description: "고객 맞춤형 웹 플랫폼 개발 및 운영",
      achievements: [
        "고객사 웹 사이트 반응형 레이아웃 15개 이상 구축",
        "사용자 행동 분석 기반 UI/UX 가동성 개선",
        "백엔드 데이터 통신 연동 및 오류 예외 처리 구현",
        "크로스 브라우징 호환성 테스트 및 CSS 이슈 해결",
        "운영 이슈 트래킹 및 즉각적인 핫픽스 전개",
        "기술 문서화 및 팀 내 아키텍처 가이드 작성"
      ],
      techStack: ["JavaScript", "React", "HTML5", "CSS3", "SCSS", "Figma"]
    },
    {
      company: "디지털 서비스사 C",
      departmentRole: "개발부 / 인턴 개발자",
      period: "2020.06 ~ 2021.03 (10개월)",
      type: "인턴/계약직",
      description: "서비스 퍼블리싱 및 신규 기능 개발 지원",
      achievements: [
        "신규 웹 페이지 20여 개 퍼블리싱 및 마크업 작업",
        "공통 UI 버튼 및 모달 레이아웃 라이브러리 제작",
        "REST API 데이터 바인딩 및 폼 검증 로직 작성",
        "QA 버그 리포트 대응 및 인터페이스 개선",
        "Git 기반 버전 관리 및 협업 흐름 준수",
        "디자인 가이드라인 준수를 위한 UI 검수 작업"
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "Git", "Figma"]
    },
    {
      company: "테크 스타트업 D",
      departmentRole: "웹개발팀 / 개발 지원",
      period: "2019.09 ~ 2020.03 (7개월)",
      type: "계약직",
      description: "초기 프로토타입 개발 및 사이트 유지보수",
      achievements: [
        "서비스 MVP 프로토타입 제작 지원",
        "웹 사이트 콘텐츠 업데이트 및 데이터 정리",
        "사용자 피드백 기반 간이 기능 추가",
        "SEO 기본 태그 설정 및 메타데이터 관리",
        "팀 내부 업무 보조 및 테스트 시나리오 작성"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "jQuery"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "스마트 업무 관리 & 협업 플랫폼 (TaskHub)",
      category: "web",
      period: "2023.10 ~ 2024.01 (4개월)",
      role: "프론트엔드 & 백엔드 개발 (팀 프로젝트)",
      summary: "팀 단위 프로젝트 상태 관리, Kanban 칸반 보드 및 실시간 동시 수정 업무 관리 플랫폼",
      description: "직관적인 drag-and-drop 칸반 보드 인터페이스와 실시간 채팅/알림 기능을 갖춘 업무 협업 툴입니다. WebSocket을 이용한 상태 동기화 및 캘린더 연동 기능을 개발했습니다.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "HTML5 Drag and Drop API를 활용한 무단차 칸반 카드 이동 기능 구현",
        "Socket.io 기반 멀티유저 실시간 상태 업데이트 처리",
        "JWT 인증 및 Refresh Token 자동 갱신 인터셉터 구축"
      ],
      techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Socket.io", "MongoDB"],
      githubUrl: "https://github.com/acoustjk/portfolio",
      demoUrl: "https://acoustjk.github.io/portfolio/"
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
      githubUrl: "https://github.com/acoustjk/portfolio",
      demoUrl: "https://acoustjk.github.io/portfolio/"
    },
    {
      id: "project-3",
      title: "개발자 스터디 및 프로젝트 모임 매칭 웹 (DevMatch)",
      category: "web",
      period: "2022.11 ~ 2023.02 (3개월)",
      role: "프론트엔드 개발 리드 (팀 프로젝트)",
      summary: "기술 스택 및 지역 기반 스터디원 모집 및 포트폴리오 리뷰 사이트",
      description: "개발자들이 스택별 스터디 그룹을 생성하고 참가 신청을 관리할 수 있는 모임 매칭 웹플랫폼입니다.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "카카오 지도 API 연동으로 오프라인 모임 장소 검색 및 마커 표시",
        "무한 스크롤(Intersection Observer) 적용으로 모집글 목록 경험 개선",
        "Zustand 전역 상태 관리를 통한 스택 필터 및 검색 기능 구현"
      ],
      techStack: ["React", "JavaScript", "Zustand", "Tailwind CSS", "Express", "MySQL"],
      githubUrl: "https://github.com/acoustjk/portfolio",
      demoUrl: "https://acoustjk.github.io/portfolio/"
    }
  ],

  education: [
    {
      school: "4년제 대학교",
      degree: "컴퓨터공학과 / 학사 졸업",
      period: "2018.03 ~ 2022.02",
      gpa: "3.8 / 4.5",
      details: "컴퓨터공학 전공 (자료구조, 알고리즘, 소프트웨어 공학, 데이터베이스 수강)"
    }
  ],

  certificates: [
    {
      name: "정보처리기사",
      issuer: "한국산업인력공단",
      date: "2023.05",
      badge: "자격증"
    },
    {
      name: "SQLD (SQL 개발자)",
      issuer: "한국데이터산업진흥원",
      date: "2022.10",
      badge: "자격증"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

/**
 * Personal Portfolio Data Configuration
 * 이중권 님의 이력서 (PDF) 실제 데이터 (원문 100% 적용)
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "이중권",
    englishName: "Joong-kwon Lee",
    title: "음향, 시스템 설계 & PM, 사운드 엔지니어",
    shortBio: "백제예술대학 수석 졸업 및 성주음향, 사운드웍스, 담소리, 에스에스브이를 거치며 방송/AV/CCTV 시스템 설계, 사운드 엔지니어링, 스피커 제품 개발, 특허 및 ICT 인증을 주도해온 15년 11개월 경력의 엔지니어입니다.",
    typedHeadlines: [
      "안녕하세요. 이중권입니다.",
      "방송/AV/CCTV 설비 설계 & 현장 PM 전문가입니다.",
      "15년 11개월 경력의 사운드 & 시스템 엔지니어입니다."
    ],
    avatarUrl: "./user_profile.png",
    status: "재직 중 (에스에스브이 영업지원 차장)",
    location: "경기 양주시 백석읍 복지리",
    email: "acoustjk@gmail.com",
    phone: "010-2678-1830",
    github: "https://github.com/acoustjk",
    blog: "https://blog.naver.com/acoustjk",
    linkedin: "https://linkedin.com/in/acoustjk",
    stats: {
      experienceYears: "15년 11개월",
      projectsCount: "50+",
      techCount: "10+",
      commitCount: "과 수석"
    }
  },

  strengths: [
    {
      icon: "volume-2",
      title: "방송 / AV / CCTV 설비 설계 & PM",
      description: "전관방송설비, A/V 설비, CCTV 설비 설계 및 견적 작성, 현장 PM 업무, 착/준공 서류 제작 및 공무 작업을 완벽하게 수행합니다."
    },
    {
      icon: "mic",
      title: "Sound Engineering & Editing",
      description: "가수, 성우, 악기, Foley 등 DAW 기반 녹음, 소리보정, 잡음제거, 믹싱, CF/홍보물 BGM 및 FX sound 제작을 총괄했습니다."
    },
    {
      icon: "cpu",
      title: "스피커 개발 & 회로 설계",
      description: "스피커 유닛 및 인클로져 2D 도면 작성, 제조 사양서 작성, 스피커 네트워크 회로 설계, 생산 지그 제작 및 ERP 등록을 수행했습니다."
    },
    {
      icon: "file-check",
      title: "특허 등록 & 조달청 우수인증",
      description: "ICT 융합 품질인증, Q-MARK 인증 직접 자문 획득 및 직접 아이디어를 낸 특허 1건 명세서 작성부터 등록까지 완수했습니다."
    }
  ],

  skills: {
    cad_office: [
      { name: "AutoCAD", icon: "pen-tool", color: "text-red-500", tag: "2D 도면 작성" },
      { name: "SketchUp", icon: "box", color: "text-blue-500", tag: "3D 모델링" },
      { name: "한글 (HWP)", icon: "file-text", color: "text-sky-500", tag: "문서 작성" },
      { name: "Excel", icon: "file-spreadsheet", color: "text-emerald-500", tag: "데이터 / 내역서" },
      { name: "Access", icon: "database", color: "text-purple-500", tag: "DB 관리" },
      { name: "PowerPoint", icon: "presentation", color: "text-amber-500", tag: "제안서 / 발표자료" }
    ],
    audio_daw: [
      { name: "Pro Tools", icon: "sliders", color: "text-indigo-500", tag: "DAW 녹음 & 믹싱" },
      { name: "Cubase", icon: "disc", color: "text-rose-500", tag: "음악 제작 & DAW" },
      { name: "Audacity", icon: "headphones", color: "text-yellow-500", tag: "사운드 편집" }
    ],
    ai_tools: [
      { name: "Google Gemini", icon: "sparkles", color: "text-purple-500", tag: "AI 프롬프팅 & 분석" },
      { name: "Antigravity", icon: "bot", color: "text-blue-500", tag: "에이전틱 AI & 자동화" },
      { name: "Canva AI", icon: "palette", color: "text-cyan-500", tag: "생성형 AI 디자인" }
    ]
  },

  experiences: [
    {
      company: "에스에스브이",
      departmentRole: "영업지원 차장",
      period: "2023. 03 ~ 재직중",
      type: "재직 중",
      description: "주요직무: 정보통신, CCTV | 연봉: 5,300만원",
      achievements: [
        "1. 방송/AV 설비 설계 및 견적 작성",
        "2. CCTV 설비 설계 및 견적 작성",
        "3. 현장 시공 PM 업무",
        "4. 현장 착, 준공 관련 서류 제작 및 공무 작업",
        "5. 시공관련 자재 발주, 구매",
        "6. 공장등록 등의 기반 업무 진행"
      ],
      techStack: ["정보통신", "CCTV", "방송/AV 설계", "현장 PM", "공무 작업", "자재 발주"]
    },
    {
      company: "담소리",
      departmentRole: "시스템사업부 차장",
      period: "2016. 06 ~ 2023. 02 (6년 9개월)",
      type: "정규직",
      description: "주요직무: 정보통신, CCTV",
      achievements: [
        "1. 전관방송설비, A/V설비, CCTV 설비 설계 및 견적 작성",
        "2. 프레젠테이션용 제안서 작성",
        "3. 현장 착, 준공 관련 서류 제작 및 현장미팅 등 공무작업",
        "4. 시공관련 자재 발주, 구매",
        "5. 해외협력업체 업무연락 담당",
        "6. 특허, 조달청 우수인증 진행 (ICT 융합 품질인증, Q-MARK 인증)",
        "7. 조달 입찰 건 및 통신 계약건 추적 등"
      ],
      techStack: ["전관방송설비", "A/V설비", "CCTV 설계", "제안서 작성", "Q-MARK 인증", "특허 등록"]
    },
    {
      company: "사운드웍스",
      departmentRole: "제작팀 팀장",
      period: "2011. 06 ~ 2016. 05 (5년)",
      type: "정규직",
      description: "주요직무: 엔지니어, 제작팀장",
      achievements: [
        "1. Recording Engineering: 가수, 성우, 악기, Foley 등 DAW 기반 녹음",
        "2. Sound edit & Mixing: 소리보정, 잡음제거 및 믹싱",
        "3. Sound Design: CF, 홍보물 등 BGM 및 FX sound 삽입, 믹싱",
        "4. Sound Effecting: Game Character Voice design, 각종 FX sound design",
        "5. 음성인식 DB 구축, 성우 DB 구축, 유럽 17개국 및 아랍권 Navigation System TTS Tuning"
      ],
      techStack: ["Recording Engineering", "Sound Edit & Mixing", "Sound Design", "Sound Effecting", "TTS Tuning"]
    },
    {
      company: "성주음향",
      departmentRole: "기술연구소 (산업기능요원 병역특례)",
      period: "2006. 04 ~ 2009. 02 (2년 11개월)",
      type: "병역특례",
      description: "주요직무: 스피커 개발 보조 (병역특례)",
      achievements: [
        "1. 산업 기능 요원 (병역특례) 로 재직",
        "2. 일반 스피커 유닛 및 인클로져 개발 보조",
        "3. 스피커 유닛 및 인클로져 부품 도면 및 승인 서류 작성",
        "4. 개발 스피커 유닛 및 인클로져 특성 파악 및 제조 사양서 작성",
        "5. 스피커 네트워크 회로 설계 및 도면 작성",
        "6. 개발 완료 제품 도면 (2D) 작성 및 부품 도면 작성",
        "7. ERP system 등록 및 생산 관련 지그 개발/도면 작성/제작"
      ],
      techStack: ["스피커 개발", "인클로져 설계", "회로 설계", "2D 도면", "ERP System", "산업기능요원"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "CCTV 및 전관방송/AV 설비 현장 통합 PM & 설계",
      category: "engineering",
      period: "2023.03 ~ 현재",
      role: "현장 PM 및 영업지원 차장 (에스에스브이 / 담소리)",
      summary: "공원, 산책로 방범 CCTV 및 관공서/빌딩 전관방송·AV 설비 설계, 견적, 시공 PM 및 준공",
      description: "현장 조사부터 시작하여 AutoCAD 기반 설비 도면 작성, 자재 발주, 유관 업체(전기, 조경) 미팅, 감리 협의, 현장 PM 지휘 및 착/준공 서류 완성을 포함하는 프로젝트입니다.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "방송/AV 및 CCTV 설비 설계, 견적, 현장 시공 PM 완수",
        "ICT 융합 품질인증 및 Q-MARK 인증 직접 획득",
        "독자 아이디어 명세서 작성부터 주도하여 특허 1건 등록 성과"
      ],
      techStack: ["CCTV 설계", "AV 설비", "AutoCAD", "현장 PM", "조달 입찰"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "project-2",
      title: "글로벌 내비게이션 TTS Tuning & 음성 DB 구축",
      category: "sound",
      period: "2011.06 ~ 2016.05",
      role: "제작팀 팀장 (사운드웍스)",
      summary: "유럽 17개국 및 아랍권 내비게이션 시스템 TTS 음성 튜닝 및 성우 DB 구축",
      description: "사기업 및 국가 연구기관 협업 프로젝트로, 음성 합성 엔진 및 음성 인식 연구용 DB 구축을 위한 성우 녹음, Sound Edit, TTS Tuning 업무를 총괄 관장했습니다.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "유럽 17개국 및 아랍권 Navigation System TTS Tuning 총괄",
        "가수, 성우, 악기, Foley 등 DAW 기반 녹음 및 믹싱",
        "CF, 게임 캐릭터 보이스, BGM 및 FX 사운드 디렉팅"
      ],
      techStack: ["DAW 녹음", "Sound Design", "TTS Tuning", "음성 DB", "Studio Recording"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "project-3",
      title: "스피커 유닛, 인클로져 & 회로 개발",
      category: "hardware",
      period: "2006.04 ~ 2009.02",
      role: "기술연구소 엔지니어 (성주음향)",
      summary: "스피커 유닛 특성 분석, 회로 설계, 2D 도면 제작 및 제조 사양서 작성",
      description: "산업기능요원(병역특례)으로 재직하며 스피커 네트워크 회로 설계, 2D 캐드 도면 작성, 생산용 지그 개발 및 ERP 시스템 등록을 전담했습니다.",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "스피커 유닛 및 인클로져 2D 도면 및 승인서류 작성",
        "스피커 네트워크 회로 설계 및 생산 지그 제작",
        "ERP system 등록 및 제조 사양서 작성"
      ],
      techStack: ["스피커 개발", "회로 설계", "AutoCAD 2D", "ERP", "지그 제작"],
      githubUrl: "",
      demoUrl: ""
    }
  ],

  education: [
    {
      school: "백제예술대학",
      degree: "실용음악계열 Record Engineering 전공 (대학 2,3년 / 졸업)",
      period: "2005. 03 ~ 2011. 02",
      gpa: "4.17 / 4.5",
      details: "레코드 엔지니어링 전공, 4학기 내내 장학금 수여, 과 수석 졸업"
    },
    {
      school: "의정부고등학교",
      degree: "졸업",
      period: "2004년",
      gpa: "",
      details: "의정부고등학교 졸업"
    }
  ],

  certificates: [
    {
      name: "전자기기기능사",
      issuer: "산업인력공단",
      date: "2006. 04",
      badge: "자격증"
    },
    {
      name: "1종보통운전면허",
      issuer: "도로교통관리공단",
      date: "2004. 01",
      badge: "자격증"
    },
    {
      name: "G-telp Lv.2 78점",
      issuer: "취득일 : 2021. 01",
      date: "2021. 01",
      badge: "어학"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

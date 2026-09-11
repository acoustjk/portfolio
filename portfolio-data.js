/**
 * Personal Portfolio Data Configuration
 * 이중권 님의 이력서 (PDF) 실제 데이터
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "이중권",
    englishName: "Joong-kwon Lee",
    title: "15년+ 경력의 음향 & 시스템 설비 설계·PM 엔지니어",
    shortBio: "백제예술대학 수석 졸업 및 성주음향, 사운드웍스, 담소리, 에스에스브이를 거치며 방송/AV/CCTV 시스템 설계, 사운드 엔지니어링, 스피커 제품 개발, 특허 및 ICT 인증을 주도해온 15년 11개월 경력의 엔지니어입니다.",
    typedHeadlines: [
      "음향 & 시스템 설비 설계·PM 전문가 이중권입니다.",
      "방송/AV/CCTV 설계부터 현장 PM, 조달 인증까지 총괄합니다.",
      "15년+ 커리어의 노하우로 소리와 시스템 기술을 완성합니다."
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
      title: "방송 / AV / CCTV 시스템 설계",
      description: "전관방송설비, A/V 설비, CCTV 설비 설계 및 견적 작성, 현장 PM 업무, 착/준공 서류 및 공무 작업을 완벽하게 수행합니다."
    },
    {
      icon: "mic",
      title: "사운드 엔지니어링 & 믹싱",
      description: "가수/성우/악기 녹음(DAW), 소리보정, 잡음제거, 믹싱, Sound Design(CF, BGM, FX sound), 성우 DB 구축 및 TTS Tuning을 진행했습니다."
    },
    {
      icon: "cpu",
      title: "스피커 제품 개발 & 회로 설계",
      description: "스피커 유닛 및 인클로져 2D 도면 작성, 제조 사양서 작성, 스피커 네트워크 회로 설계, 생산 지그 제작 및 ERP 등록 경험을 보유하고 있습니다."
    },
    {
      icon: "file-check",
      title: "조달청 우수인증 & 특허 출원",
      description: "ICT 융합 품질인증, Q-MARK 인증 획득 및 직접 아이디어를 낸 특허 1건 명세서 작성부터 등록까지 주도하여 성과를 냈습니다."
    }
  ],

  skills: {
    engineering: [
      { name: "AutoCAD (2D 도면 작성)", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/autocad/autocad-original.svg" },
      { name: "SketchUp (3D 모델링)", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketchup/sketchup-original.svg" },
      { name: "방송 / AV / CCTV 설비 설계", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
      { name: "현장 PM & 시공 관리", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" }
    ],
    sound: [
      { name: "DAW 기반 녹음 (Recording)", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "Sound Edit & Mixing (믹싱/보정)", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/audacity/audacity-original.svg" },
      { name: "Sound Design (BGM/FX sound)", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/music/music-original.svg" },
      { name: "TTS Tuning & 음성 DB 구축", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" }
    ],
    tools: [
      { name: "MS Excel / PowerPoint", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "조달 입찰 & 계약 추적", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg" },
      { name: "ERP System & 공무 작업", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" }
    ]
  },

  experiences: [
    {
      company: "에스에스브이",
      departmentRole: "영업지원 차장",
      period: "2023.03 ~ 재직 중",
      type: "정규직",
      description: "CCTV, 방송/AV 정보통신 설비 현장 PM, 설계 및 견적, 자재 발주 관리",
      achievements: [
        "방송/AV 설비 설계 및 견적 작성, CCTV 설비 설계 및 견적 작성",
        "방범 카메라 위주 공원, 산책로 CCTV 현장 PM 지휘, 현장 조사 및 유관 업체 미팅",
        "현장 착/준공 관련 서류 제작 및 공무 작업 진행",
        "시공 관련 자재 발주 및 구매, 감리/감독관 협의를 통한 설계 변경 및 수주 수익성 극대화",
        "영상감시장치 공장등록 및 직접생산증명 등 기틀 기반 업무 총괄"
      ],
      techStack: ["CCTV 설계", "AV 설비", "현장 PM", "AutoCAD", "공무 작업", "조달 발주"]
    },
    {
      company: "담소리",
      departmentRole: "시스템사업부 차장",
      period: "2016.06 ~ 2023.02 (6년 9개월)",
      type: "정규직",
      description: "음향/전관방송/AV/CCTV 설계, 영업 지원, 인증 및 특허 진행",
      achievements: [
        "전관방송설비, A/V 설비, CCTV 설비 설계 검토 및 직접 설계 작성",
        "입찰 공고, 현상 설계 공모 추적 및 프레젠테이션용 제안서 작성 (영업팀 지원)",
        "착/준공 서류 제작, 현장 미팅, 자재 발주/구매 및 사용자 교육/플러그인 교육 진행",
        "ODM/OEM 해외 출장 (대표님/이사님 동행) 및 해외 협력업체 업무 연락 담당",
        "ICT 융합 품질인증 참여 획득 및 Q-MARK 인증 직접 자문 획득 성공",
        "직접 낸 아이디어로 명세서 작성부터 주도하여 특허 1건 등록 성과"
      ],
      techStack: ["전관방송설비", "AV 설비", "AutoCAD", "제안서 작성", "Q-MARK 인증", "특허 등록"]
    },
    {
      company: "사운드웍스",
      departmentRole: "제작팀 팀장",
      period: "2011.06 ~ 2016.05 (5년)",
      type: "정규직",
      description: "녹음, 사운드 디자인, 믹싱, 성우 DB 구축 및 Navigation TTS Tuning 총괄",
      achievements: [
        "Recording Engineering: 가수, 성우, 악기, Foley 등 DAW 기반 녹음 진행",
        "Sound edit & Mixing: 소리 보정, 잡음 제거 및 믹싱 작업",
        "Sound Design: CF, 홍보물 등 BGM 및 FX sound 삽입/믹싱",
        "Sound Effecting: Game Character Voice design 및 각종 FX sound design",
        "국가 연구기관 협업: 음성인식 DB 구축, 성우 DB 구축, 유럽 17개국 및 아랍권 Navigation System TTS Tuning"
      ],
      techStack: ["DAW 녹음", "Sound Design", "Mixing", "TTS Tuning", "Foley", "팀장"]
    },
    {
      company: "성주음향",
      departmentRole: "기술연구소 (산업기능요원 병역특례)",
      period: "2006.04 ~ 2009.02 (2년 11개월)",
      type: "병역특례",
      description: "스피커 유닛, 인클로져 개발 보조 및 회로/도면 설계",
      achievements: [
        "일반 스피커 유닛 및 인클로져 개발 보조, 개발 스피커 유닛 특성 파악",
        "스피커 유닛 및 인클로져 부품 도면 (2D) 작성 및 승인 서류 작성",
        "스피커 네트워크 회로 설계 및 도면 작성, 제조 사양서 작성",
        "개발 완료 제품 도면/부품 도면 작성 및 ERP system 등록",
        "생산 관련 지그 개발 및 도면 작성/제작"
      ],
      techStack: ["스피커 개발", "네트워크 회로 설계", "2D 도면", "ERP System", "산업기능요원"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "CCTV 및 전관방송/AV 설비 현장 통합 PM & 설계",
      category: "engineering",
      period: "2023.03 ~ 현재",
      role: "현장 PM 및 수석 설계자 (에스에스브이 / 담소리)",
      summary: "공원, 산책로 방범 CCTV 및 관공서/빌딩 전관방송·AV 설비 설계, 견적, 시공 PM 및 준공",
      description: "현장 조사부터 시작하여 AutoCAD 기반 설비 도면 작성, 자재 발주, 유관 업체(전기, 조경) 미팅, 감리 협의, 현장 PM 지휘 및 착/준공 서류 완성을 포함하는 턴키 프로젝트입니다.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "설계 변경 수주를 통한 프로젝트별 수익성 최대화 달성",
        "ICT 융합 품질인증 및 Q-MARK 인증 획득 주도",
        "특허 출원 및 등록 (독자 아이디어 명세서 작성 및 등록 완료)"
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
      description: "국가 연구기관 및 사기업 협업 프로젝트로, 음성 합성 엔진 및 음성 인식 연구용 DB 구축을 위한 성우 녹음, Sound Edit, TTS Tuning 업무를 관장했습니다.",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "유럽 17개국 및 아랍권 Navigation TTS 음성 튜닝 총괄",
        "CF, 게임 캐릭터 보이스, BGM 및 FX 사운드 디렉팅",
        "DAW 기반 멀티트랙 믹싱 및 노이즈 보정 프로세스 정립"
      ],
      techStack: ["DAW", "Sound Design", "TTS Tuning", "음성 DB", "Studio Recording"],
      githubUrl: "",
      demoUrl: ""
    },
    {
      id: "project-3",
      title: "하이엔드 스피커 유닛 & 인클로져 부품 개발",
      category: "hardware",
      period: "2006.04 ~ 2009.02",
      role: "기술연구소 엔지니어 (성주음향)",
      summary: "스피커 유닛 특성 분석, 회로 설계, 2D 도면 제작 및 제조 사양서 작성",
      description: "산업기능요원으로 재직하며 스피커 네트워크 회로 설계, 2D 캐드 도면 작성, 생산용 지그 개발 및 ERP 시스템 등록을 전담했습니다.",
      image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80",
      highlights: [
        "스피커 유닛 및 인클로져 2D 도면 및 승인서류 작성",
        "네트워크 회로 설계 및 생산 지그 제작",
        "ERP 시스템 등록 및 제조 사양서 표준화"
      ],
      techStack: ["스피커 설계", "회로 설계", "AutoCAD 2D", "ERP", "지그 제작"],
      githubUrl: "",
      demoUrl: ""
    }
  ],

  education: [
    {
      school: "백제예술대학",
      degree: "실용음악계열 Record Engineering 전공 (과 수석 졸업)",
      period: "2005.03 ~ 2011.02 졸업",
      gpa: "4.17 / 4.5",
      details: "레코드 엔지니어링 전공, 4학기 내내 장학금 수여, 과 수석 졸업"
    },
    {
      school: "의정부고등학교",
      degree: "졸업",
      period: "2004년 졸업",
      gpa: "",
      details: "의정부고등학교 인문계 졸업"
    }
  ],

  certificates: [
    {
      name: "전자기기기능사",
      issuer: "한국산업인력공단",
      date: "2006.04",
      badge: "자격증"
    },
    {
      name: "1종보통운전면허",
      issuer: "도로교통공단",
      date: "2004.01",
      badge: "자격증"
    },
    {
      name: "G-telp Lv.2 78점",
      issuer: "국제테스트연구원",
      date: "2021.01",
      badge: "어학"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}

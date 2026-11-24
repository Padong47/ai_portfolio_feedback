import {
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  BrainCircuit,
  Code2,
  Database,
  FileSearch,
  Gauge,
  Mail,
  MessageSquareText,
  Music2,
  Network,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { ContactForm } from "@/components/contact-form";

const aiCapabilities = [
  {
    index: "01",
    icon: BrainCircuit,
    title: "LLM 요청 처리",
    description: "고객 요청을 여러 작업으로 나누고 LangGraph, Multi-Agent, MCP로 실행 순서를 구성했습니다.",
    tools: ["LangGraph", "Multi-Agent", "LLM", "MCP", "Prompt Design"],
  },
  {
    index: "02",
    icon: FileSearch,
    title: "검색 증강 생성",
    description: "PDF를 청크로 나누고 FAISS에서 질문과 가까운 문맥을 찾아 답변 생성에 사용했습니다.",
    tools: ["RAG", "FAISS", "Vector Search", "PyPDFLoader", "Chunking"],
  },
  {
    index: "03",
    icon: AudioLines,
    title: "음성 입력과 출력",
    description: "Whisper로 음성을 인식하고 Qwen3로 주문 의도를 분석했습니다. MeloTTS로 안내 음성을 만들었습니다.",
    tools: ["Whisper", "Qwen3", "MeloTTS", "STT", "TTS"],
  },
  {
    index: "04",
    icon: Wrench,
    title: "웹 서비스 개발과 배포",
    description: "AI 기능을 FastAPI와 React 화면에 연결하고 Docker와 Vercel로 실행했습니다.",
    tools: ["FastAPI", "React", "Docker", "Pydantic", "Vercel"],
  },
];

const featuredProjects = [
  {
    number: "01",
    name: "CIPHER",
    eyebrow: "MULTI-AGENT SERVICE",
    statement: "고객의 도움 요청과 운영자의 처리 상태를\n한곳에서 관리합니다.",
    summary: "방탈출 고객이 도움을 요청하면 운영자가 상태를 확인하고 처리 결과를 기록할 수 있습니다.",
    aiPoint: "AI로 Docker·MCP·Backend·DB·LLM 연동 오류를 재현하고 원인을 분석했습니다. 실사용 시나리오 테스트, PR·코드 검토, 성능 비교와 인계 보고서 작성에 활용했습니다.",
    humanPoint: "Docker·MCP 서버를 연결하고 Backend·DB·LLM 도구 호출이 정상 동작하는지 검증했습니다. 서비스 간 입력 계약과 실행 오류를 해결하고, 고객·운영자 화면의 응답 속도와 오류를 점검했습니다.",
    process: ["요청 입력", "문맥 파악", "에이전트 협업", "운영자 처리", "상태 피드백"],
    role: "팀 프로젝트 · Docker/MCP/Backend/DB/LLM 연동 검증, 실사용 테스트, 품질 점검",
    image: "/projects/cipher-home.png",
    imageAlt: "CIPHER 고객 화면과 운영자 화면을 선택하는 메인 페이지",
    url: "https://cipher-kg8hyoy94-rsb3748419-7538.vercel.app/",
    videoUrl: "/cipher-demo.mp4",
    tags: ["React", "TypeScript", "LLM", "Multi-Agent", "OpenRouter", "FastAPI", "MCP", "PostgreSQL", "Docker", "Langfuse", "Pydantic", "Vercel"],
    icon: MessageSquareText,
  },
  {
    number: "02",
    name: "MALLO",
    eyebrow: "VOICE AI KIOSK",
    statement: "큰 버튼과 음성 안내로\n메뉴 선택부터 결제까지 돕습니다.",
    summary: "음성 안내와 큰 버튼을 사용해 메뉴 선택, 장바구니, 결제 단계를 진행하는 카페 키오스크입니다.",
    aiPoint: "AI로 한국어 주문 문장 3,000건의 생성·교정·라벨링과 Split 누수 검증 자료 제작을 자동화했습니다. NLU·Order Engine 구현, 테스트 작성, 오류·병합 충돌 해결과 Git·PR 관리에 활용했습니다.",
    humanPoint: "STT가 전달한 한국어 문장을 해석해 OrderCommand[]로 변환하는 NLU 영역을 맡았습니다. 복수·혼합 주문, 옵션·수량 변경, 오류 처리, 장바구니 반영과 NLU 데이터셋 구축·검수를 담당했습니다.",
    process: ["음성 입력", "STT", "의도 이해", "주문 상태", "TTS 안내"],
    role: "팀 프로젝트 · NLU, OrderCommand 변환, 주문 데이터셋 구축·검수",
    image: "/projects/mallo-home.png",
    imageAlt: "말로 카페 음성 키오스크의 주문 시작 화면",
    url: "https://proj1-d.vercel.app/",
    videoUrl: null,
    tags: ["Python", "JavaScript", "Whisper", "Qwen3", "MeloTTS", "STT", "NLU", "TTS", "PyTorch", "Transformers", "LoRA / QLoRA", "CUDA", "Vercel"],
    icon: AudioLines,
  },
  {
    number: "03",
    name: "CreditPulse",
    eyebrow: "ENTERPRISE CREDIT RAG",
    statement: "사업보고서에서 근거를 찾아\n기업여신 심사 초안과 인용을 만듭니다.",
    summary: "기업·사업연도·체크리스트 항목을 입력하면 공시 문서에서 근거를 찾고, 심사역이 승인한 내용만 심사 메모로 저장하는 서비스입니다.",
    aiPoint: "LangGraph 멀티에이전트가 질문을 나누고, BM25·pgvector·RRF·리랭킹으로 찾은 근거를 바탕으로 판정 초안과 인용을 생성합니다.",
    humanPoint: "DART 문서 파싱·청킹과 검색 조합 비교를 맡았습니다. 동결 평가셋을 다시 측정하고 검색 실패 원인을 분석해 RAG 품질을 검증했습니다.",
    process: ["기업·항목 입력", "공시 문서 검색", "리랭킹", "판정·인용 생성", "심사역 승인"],
    role: "팀 프로젝트 · 검색·데이터 및 RAG 품질, 동결 평가셋 재측정, 검색 실패 분석",
    image: "/projects/creditpulse-home.png",
    imageAlt: "CreditPulse 기업여신 심사 지원 서비스의 메인 화면",
    url: "https://creditpulse-api-236552047198.asia-northeast3.run.app/",
    videoUrl: "/creditpulse-demo.mp4",
    tags: ["Python", "FastAPI", "LangGraph", "RAG", "OpenDART", "BM25", "pgvector", "RRF", "Voyage Rerank", "PostgreSQL", "Supabase", "Docker", "Langfuse", "GCP Cloud Run"],
    icon: Database,
  },
];

const archiveProjects = [
  {
    title: "PDF RAG",
    category: "DOCUMENT QUESTION ANSWERING",
    description: "PDF를 올리면 문서를 청크로 나누고 FAISS에서 관련 문맥을 검색해 질문에 답합니다.",
    tags: ["LangGraph", "RAG", "FastAPI", "Docker", "FAISS", "Streamlit"],
    url: "https://app-aazastd83baor2kfopfzou.streamlit.app/",
    icon: FileSearch,
  },
  {
    title: "AI 음악 장르 예측기",
    category: "AUDIO CLASSIFICATION",
    description: "WAV 파일을 넣으면 오디오 분류 모델이 음악 장르를 예측하고 장르별 확률을 보여줍니다.",
    tags: ["Audio ML", "Python", "Streamlit"],
    url: "https://aimusicpreview-2artzdthdvg9lbqe2vbnym.streamlit.app/",
    icon: Music2,
  },
  {
    title: "CNN 손글씨 숫자 분류",
    category: "COMPUTER VISION",
    description: "손글씨 이미지를 28×28 텐서로 바꾸고 CNN과 softmax로 분류해 숫자별 예측 결과를 보여줍니다.",
    tags: ["CNN", "Image", "Streamlit"],
    url: "https://classificationtest-csjkmuyoabvnrawsn2jsyd.streamlit.app/",
    icon: Network,
  },
];

const aiWorkflow = [
  ["요구사항 정의", "입력과 실패 조건 확인", "사용자가 입력하는 값과 기능이 실패하는 조건을 먼저 적습니다."],
  ["AI 활용", "초안 구현과 문제 해결", "AI로 코드 초안과 수정안을 빠르게 만들고, 기능의 입력·출력 계약은 직접 정합니다."],
  ["반복 테스트", "기능별·통합 테스트", "정상 입력, 예외 입력, 모델 출력, API 연결을 반복해서 확인합니다."],
  ["배포 검증", "실사용 순서로 최종 테스트", "배포 환경에서 주요 시나리오를 끝까지 실행해 오류와 응답을 확인합니다."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RSM AI 포트폴리오 홈"><span className="brand-orb"><Sparkles size={16} /></span><span>RSM.AI</span></a>
        <nav aria-label="주요 메뉴"><a href="#approach">소개</a><a href="#capabilities">기술</a><a href="#projects">프로젝트</a><a href="#about">이력</a></nav>
        <a className="header-cta" href="#contact">연락하기 <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> AI 엔지니어 포트폴리오 · 2026</p>
          <h1>AI를 이용하는<br /><em>데이터 엔지니어 류승민</em></h1>
          <p className="hero-description">안녕하세요, 류승민입니다. 데이터 처리부터 AI 기능 구현, API 연동, 배포까지 서비스 전체 과정을 직접 다룹니다. LLM·RAG·음성 AI를 활용하고, 반복 테스트와 오류 분석을 거쳐 실제로 작동하는 서비스를 만듭니다.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">AI 프로젝트 보기 <ArrowDownRight size={18} /></a><a className="mail-link" href="mailto:rsb3748419@gmail.com">rsb3748419@gmail.com</a></div>
        </div>
        <aside className="hero-lab" aria-label="Live system map">
          <div className="lab-top"><span>LIVE SYSTEM MAP</span><i>READY</i></div>
          <div className="lab-map">
            <div className="node node-input"><small>01</small><strong>INPUT</strong><span>voice · text · pdf</span></div>
            <div className="node node-reason"><small>02</small><strong>REASON</strong><span>LLM · RAG · agents</span></div>
            <div className="node node-act"><small>03</small><strong>ACT</strong><span>API · state · tools</span></div>
            <div className="node node-check"><small>04</small><strong>VERIFY</strong><span>evidence · logs · human</span></div>
            <svg viewBox="0 0 500 310" role="presentation"><path d="M123 72 C205 72 180 128 257 128" /><path d="M343 128 C420 128 377 235 429 235" /><path d="M257 164 C257 236 170 235 117 235" /><path d="M151 235 C243 284 345 274 401 243" /></svg>
          </div>
          <div className="lab-footer"><span><i /> HUMAN IN THE LOOP</span><code>build → test → explain</code></div>
        </aside>
        <a className="scroll-note" href="#approach">아래로 보기 <ArrowDownRight size={16} /></a>
      </section>

      <section className="signal-strip" aria-label="주요 AI 기술"><div><span>LANGGRAPH</span><b>✦</b><span>MULTI-AGENT</span><b>✦</b><span>VOICE AI</span><b>✦</b><span>RAG</span><b>✦</b><span>FASTAPI</span><b>✦</b><span>DOCKER</span></div></section>

      <section className="approach section-shell" id="approach">
        <div className="section-label"><span>01</span> 소개</div>
        <div className="approach-grid">
          <div><p className="kicker">개발 분야</p><h2>AI 기능을 API와 화면에 붙여<br /><em>직접 배포했습니다.</em></h2></div>
          <div className="approach-copy"><p className="lead">AI·빅데이터 전공과 KDT 과정에서 <strong>문서 검색, 음성 주문, 고객 지원 프로젝트</strong>를 만들었습니다.</p><p>LangGraph와 FAISS로 PDF 검색 기능을 구현했습니다. Whisper, Qwen3, MeloTTS로 음성 주문 기능을 만들었습니다. React와 FastAPI로 화면과 API를 개발했고 Docker와 Vercel로 배포했습니다.</p><div className="principle"><BrainCircuit size={22} /><span>모델 출력은 직접 실행해 보고<br /><strong>오류와 사용자 동작을 확인합니다.</strong></span></div></div>
        </div>
      </section>

      <section className="capabilities" id="capabilities"><div className="section-shell">
        <div className="section-heading light"><div><div className="section-label"><span>02</span> 사용 기술</div><h2>프로젝트에서 사용한<br /><em>AI 기술</em></h2></div><p>각 기술을 어떤 기능에 사용했는지 정리했습니다.</p></div>
        <div className="capability-grid">{aiCapabilities.map((capability) => { const Icon = capability.icon; return <article key={capability.title}><div className="capability-top"><Icon size={27} /><span>{capability.index}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><div className="tool-list">{capability.tools.map((tool) => <code key={tool}>{tool}</code>)}</div></article>; })}</div>
      </div></section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading"><div><div className="section-label"><span>03</span> 대표 프로젝트</div><h2><em>대표 AI 서비스 3선</em></h2></div><p>각 프로젝트의 문제, 구현 내용, 사용 기술, 데모를 확인할 수 있습니다.</p></div>
        <div className="project-list">{featuredProjects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.name}>
          <div className="project-meta"><span>{project.number}</span><Icon size={25} /><p>{project.eyebrow}</p></div>
          <div className="project-body">
            <div className="project-heading"><div><p>{project.eyebrow}</p><h3>{project.name}</h3></div><div className="project-actions"><a href={project.url} target="_blank" rel="noreferrer">데모 열기 <ArrowUpRight size={17} /></a>{project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noreferrer">영상 보기 <ArrowUpRight size={17} /></a>}</div></div>
            <p className="project-statement">{project.statement.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</p>
            <p className="project-summary">{project.summary}</p>
            <figure><div className="browser-bar"><span /><span /><span /><code>{project.name.toLowerCase().replaceAll(" ", "-")}.ai</code></div><Image src={project.image} alt={project.imageAlt} width={1265} height={712} sizes="(max-width: 760px) 100vw, 900px" /></figure>
            <div className="ai-human-grid"><div><span>내가 직접 한 일</span><p>{project.humanPoint}</p></div><div><span>AI를 쓴 부분</span><p>{project.aiPoint}</p></div></div>
            <div className="flow"><span>처리 순서</span><ol>{project.process.map((step, index) => <li key={step}><i>{String(index + 1).padStart(2, "0")}</i><strong>{step}</strong>{index < project.process.length - 1 && <b>→</b>}</li>)}</ol></div>
            <div className="project-role"><span>내 역할</span><p>{project.role}</p></div>
            <div className="tag-list">{project.tags.map((tag) => <code key={tag}>{tag}</code>)}</div>
          </div>
        </article>; })}</div>
      </section>

      <section className="workflow-section"><div className="section-shell">
        <div className="section-heading light"><div><div className="section-label"><span>04</span> 개발 방식</div><h2>AI를 활용하고<br /><em>테스트로 확인합니다.</em></h2></div><p>AI로 구현 속도를 높이되, 기능별·통합·실사용 테스트를 통과한 결과만 적용합니다.</p></div>
        <div className="workflow-grid">{aiWorkflow.map(([label, title, body], index) => <article key={label}><div><span>{String(index + 1).padStart(2, "0")}</span><i /></div><p>{label}</p><h3>{title}</h3><div className="workflow-line" /><small>{body}</small></article>)}</div>
        <div className="responsible-ai"><ShieldCheck size={28} /><div><span>테스트 원칙</span><strong>AI가 만든 코드와 결과는 테스트를 통과한 뒤 적용합니다.</strong></div><p>정상·예외 입력, API 연동, 오류 로그, 사용자 동작을 직접 반복 확인합니다.</p></div>
      </div></section>

      <section className="archive section-shell" id="archive">
        <div className="section-heading"><div><div className="section-label"><span>05</span> 추가 작업물</div><h2><em>그 외의 작업물</em></h2></div><p>문서 검색, 오디오 분류, 이미지 분류 프로젝트 3개입니다.</p></div>
        <div className="archive-grid">{archiveProjects.map((project, index) => { const Icon = project.icon; const content = <><div className="archive-top"><span>0{index + 1}</span><Icon size={23} /></div><p>{project.category}</p><h3>{project.title}</h3><div className="archive-description">{project.description}</div><div className="archive-tags">{project.tags.map((tag) => <code key={tag}>{tag}</code>)}</div><div className="archive-link">{project.url ? "OPEN PROJECT" : "CASE NOTE"}{project.url ? <ArrowUpRight size={16} /> : <Code2 size={16} />}</div></>; return project.url ? <a href={project.url} target="_blank" rel="noreferrer" key={project.title}>{content}</a> : <article key={project.title}>{content}</article>; })}</div>
      </section>

      <section className="about-section" id="about"><div className="section-shell">
        <div className="section-heading light"><div><div className="section-label"><span>06</span> 이력 및 협업</div><h2>교육과 자격,<br /><em>협업 방식을 정리했습니다.</em></h2></div><p>전공, KDT 교육, 자격, 팀 프로젝트 내용을 확인할 수 있습니다.</p></div>
        <div className="about-grid">
          <article className="collaboration-card"><div className="card-icon"><Users size={25} /></div><p>협업</p><h3>기획·프론트엔드·백엔드·AI<br />팀원과 협업했습니다.</h3><dl><div><dt>함께한 사람</dt><dd>AI Human KDT 팀 프로젝트에서 기획, 프론트엔드, 백엔드, AI 담당 팀원과 협업했습니다.</dd></div><div><dt>일한 방식</dt><dd>사용자 시나리오를 먼저 작성하고 화면과 API가 주고받을 데이터 형식을 정했습니다. 기능은 Must·Should·Could로 나눠 담당자와 완료 조건을 기록했습니다.</dd></div><div><dt>의견이 다를 때</dt><dd>사용자에게 미치는 영향, 구현 시간, 마감 일정을 비교했습니다. 작은 기능을 먼저 만들어 확인한 뒤 다음 작업을 정했습니다.</dd></div></dl></article>
          <article className="profile-card"><div className="card-icon"><Zap size={25} /></div><p>교육 및 자격</p><h3>AI·빅데이터를 공부하고<br />프로젝트를 만들었습니다.</h3><div className="proof-list"><div><span>교육</span><strong>용인대학교 AI학부 빅데이터전공</strong><small>3학년 이수 후 휴학 · 데이터/AI 기반 전공 학습</small></div><div><span>직업훈련</span><strong>AI Human KDT 7기</strong><small>AI 서비스 기획부터 구현·배포까지 프로젝트 기반 학습</small></div><div><span>자격</span><strong>AICE · 컴퓨터활용능력 필기</strong><small>데이터 활용과 업무 도구에 대한 기초 역량 검증</small></div></div></article>
        </div>
        <div className="base-stack"><div><Database size={21} /><span>기본 기술</span></div><p>Python · Pandas · NumPy · SQL · ETL · Validation · Logging · Matplotlib · Streamlit · CNN · PyTorch · PostgreSQL</p></div>
      </div></section>

      <section className="contact" id="contact"><div className="contact-grid section-shell"><div className="contact-copy"><div className="section-label"><span>07</span> 연락처</div><h2>AI 엔지니어<br /><em>인턴·주니어 포지션을 찾고 있습니다.</em></h2><p>AI 엔지니어 인턴·주니어 포지션과 프로젝트 협업 제안을 기다립니다. 이메일이나 문의 양식으로 연락해 주세요.</p><a href="mailto:rsb3748419@gmail.com"><Mail size={18} /> rsb3748419@gmail.com</a><div className="availability"><Gauge size={18} /><span>인턴 · 주니어 · 프로젝트 협업 가능</span></div></div><ContactForm /></div>
        <footer className="section-shell"><div className="brand"><span className="brand-orb"><Sparkles size={16} /></span><span>RSM.AI</span></div><p>류승민 AI 엔지니어 포트폴리오</p><a href="#top">맨 위로 <ArrowUpRight size={14} /></a></footer>
      </section>
    </main>
  );
}

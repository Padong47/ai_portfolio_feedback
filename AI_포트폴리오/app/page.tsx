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
    title: "LLM 오케스트레이션",
    description: "하나의 프롬프트에 의존하지 않고 역할·상태·도구 호출을 나눠 복잡한 작업을 실행 흐름으로 설계합니다.",
    tools: ["LangGraph", "Multi-Agent", "LLM", "MCP", "Prompt Design"],
  },
  {
    index: "02",
    icon: FileSearch,
    title: "검색 증강 생성",
    description: "문서를 검색 가능한 지식으로 바꾸고, 질문과 관련된 근거를 찾아 답변 문맥에 연결합니다.",
    tools: ["RAG", "FAISS", "Vector Search", "PyPDFLoader", "Chunking"],
  },
  {
    index: "03",
    icon: AudioLines,
    title: "Voice AI 경험",
    description: "음성을 입력·이해·출력 단계로 나누고 접근성 기능과 결합해 실제 사용자가 끝까지 쓸 수 있게 만듭니다.",
    tools: ["Whisper", "Qwen3", "MeloTTS", "STT", "TTS"],
  },
  {
    index: "04",
    icon: Wrench,
    title: "AI 제품화",
    description: "모델과 검색 로직을 API·인터페이스·배포 환경에 연결하고 실패 조건을 검증 가능한 형태로 남깁니다.",
    tools: ["FastAPI", "React", "Docker", "Pydantic", "Vercel"],
  },
];

const featuredProjects = [
  {
    number: "01",
    name: "CIPHER",
    eyebrow: "MULTI-AGENT SERVICE",
    statement: "AI가 요청을 이해하고,\n사람이 해결에 집중하게.",
    summary: "방탈출 이용객의 도움 요청과 운영자의 처리 흐름을 연결한 양방향 지원 서비스입니다.",
    aiPoint: "LLM·Multi-Agent·MCP를 결합해 고객 요청 문맥과 운영 상태를 하나의 지원 흐름으로 구성했습니다.",
    humanPoint: "역할별 화면, 요청 상태, 운영 이력은 사람이 즉시 판단하고 개입할 수 있도록 명확하게 설계했습니다.",
    process: ["요청 입력", "문맥 파악", "에이전트 협업", "운영자 처리", "상태 피드백"],
    role: "개인 프로젝트 · 서비스 구조, 사용자/운영자 흐름, 상태 기반 UI 설계",
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
    statement: "보지 못해도, 익숙하지 않아도\n말로 이어지는 주문 경험.",
    summary: "음성 안내와 큰 조작 요소를 결합해 주문 과정을 단계적으로 돕는 접근성 중심 키오스크입니다.",
    aiPoint: "Whisper·Qwen3·MeloTTS를 입력 인식, 의도 이해, 음성 출력으로 연결해 Voice AI 흐름을 구성했습니다.",
    humanPoint: "다시 듣기, 말하기 속도, 직원 호출, 홈 이동을 전역 기능으로 제공해 사용자가 통제권을 유지하도록 했습니다.",
    process: ["음성 입력", "STT", "의도 이해", "주문 상태", "TTS 안내"],
    role: "개인 프로젝트 · 주문 여정, 접근성 기능, 결제 완료 흐름 설계 및 구현",
    image: "/projects/mallo-home.png",
    imageAlt: "말로 카페 음성 키오스크의 주문 시작 화면",
    url: "https://proj1-d.vercel.app/",
    videoUrl: null,
    tags: ["Python", "JavaScript", "Whisper", "Qwen3", "MeloTTS", "STT", "NLU", "TTS", "PyTorch", "Transformers", "LoRA / QLoRA", "CUDA", "Vercel"],
    icon: AudioLines,
  },
  {
    number: "03",
    name: "PDF RAG",
    eyebrow: "GROUNDED DOCUMENT AI",
    statement: "그럴듯한 답보다,\n문서에서 찾은 근거를 먼저.",
    summary: "업로드한 PDF를 검색 가능한 지식으로 변환하고 관련 문맥을 찾아 답변하는 문서 질의응답 파이프라인입니다.",
    aiPoint: "문서 청크, 임베딩, FAISS 검색, 컨텍스트 조립, 답변 생성을 LangGraph 실행 흐름으로 연결했습니다.",
    humanPoint: "질문의 근거가 문서 범위 안에서 선택되도록 검색 단계를 분리하고, 업로드부터 질문까지 확인 가능한 데모로 제공했습니다.",
    process: ["PDF 업로드", "청크 분할", "벡터 검색", "문맥 조립", "근거 답변"],
    role: "개인 프로젝트 · 문서 적재, 청크 분할, 벡터 검색, 질의응답 흐름 구현",
    image: "/projects/pdf-rag-home.png",
    imageAlt: "PDF 업로드와 문서 기반 질문 기능을 제공하는 RAG 챗봇 화면",
    url: "https://app-aazastd83baor2kfopfzou.streamlit.app/",
    videoUrl: null,
    tags: ["LangGraph", "RAG", "FastAPI", "Docker", "FAISS", "Streamlit"],
    icon: FileSearch,
  },
];

const archiveProjects = [
  {
    title: "오류에 강한 데이터 파이프라인",
    category: "RELIABLE PYTHON",
    description: "KeyError와 인덱스 예외를 재현하고 로깅과 안전한 조회 패턴으로 실패 지점을 통제한 클린 코드 실험입니다.",
    tags: ["Python", "Logging", "Error Handling"],
    icon: ShieldCheck,
  },
  {
    title: "AI 음악 장르 예측기",
    category: "AUDIO CLASSIFICATION",
    description: "WAV 파일을 입력받아 모델이 음악 장르와 확률 분포를 보여주는 오디오 분류 데모입니다.",
    tags: ["Audio ML", "Python", "Streamlit"],
    url: "https://aimusicpreview-2artzdthdvg9lbqe2vbnym.streamlit.app/",
    icon: Music2,
  },
  {
    title: "CNN 손글씨 숫자 분류",
    category: "COMPUTER VISION",
    description: "입력 이미지를 28×28 텐서로 변환하고 CNN과 softmax를 거쳐 숫자별 예측 결과를 시각화합니다.",
    tags: ["CNN", "Image", "Streamlit"],
    url: "https://classificationtest-csjkmuyoabvnrawsn2jsyd.streamlit.app/",
    icon: Network,
  },
  {
    title: "PDF RAG 챗봇",
    category: "RETRIEVAL AI",
    description: "PDF를 청크로 나누고 FAISS에서 관련 문맥을 검색해 문서 기반 질의응답으로 연결합니다.",
    tags: ["RAG", "FAISS", "LangGraph"],
    url: "https://app-aazastd83baor2kfopfzou.streamlit.app/",
    icon: FileSearch,
  },
  {
    title: "CIPHER 방탈출 지원",
    category: "AGENTIC SERVICE",
    description: "고객 도움 요청과 운영자의 상태 관리를 연결해 대기부터 해결까지 진행 상황을 명확히 보여줍니다.",
    tags: ["Multi-Agent", "LLM", "Operations"],
    url: "https://cipher-kg8hyoy94-rsb3748419-7538.vercel.app/",
    icon: MessageSquareText,
  },
  {
    title: "MALLO 음성 키오스크",
    category: "VOICE AI",
    description: "음성 도움과 단계별 주문 화면으로 메뉴 선택부터 결제와 주문 완료까지 안내합니다.",
    tags: ["Whisper", "TTS", "Accessibility"],
    url: "https://proj1-d.vercel.app/",
    icon: AudioLines,
  },
];

const aiWorkflow = [
  ["FRAME", "사용자와 실패 조건 정의", "무엇을 자동화할지보다 사람이 어디에서 도움을 받아야 하는지 먼저 정합니다."],
  ["ORCHESTRATE", "모델·검색·도구 연결", "LLM, 검색, API, 상태 관리를 작은 책임으로 나눠 실행 순서를 설계합니다."],
  ["GUARD", "근거와 예외 검증", "모델의 출력을 그대로 믿지 않고 검색 근거, 입력 검증, 오류 로그를 함께 확인합니다."],
  ["SHIP", "사용 가능한 경험으로 배포", "AI 로직을 인터페이스와 연결하고 실제 사용자가 끝까지 실행 가능한 형태로 배포합니다."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RSB AI 포트폴리오 홈"><span className="brand-orb"><Sparkles size={16} /></span><span>RSB.AI</span></a>
        <nav aria-label="주요 메뉴"><a href="#approach">Approach</a><a href="#capabilities">Capabilities</a><a href="#projects">Projects</a><a href="#about">About</a></nav>
        <a className="header-cta" href="#contact">CONTACT <ArrowUpRight size={15} /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span>●</span> AI APPLICATION PORTFOLIO · 2026</p>
          <h1>AI를 기능이 아닌,<br /><em>사용자가 체감하는 흐름</em>으로.</h1>
          <p className="hero-description">LLM, Multi-Agent, RAG, Voice AI를 문제에 맞게 조합하고 검증 가능한 서비스로 연결하는 AI 빌더 류승민입니다.</p>
          <div className="hero-actions"><a className="button-primary" href="#projects">AI 프로젝트 보기 <ArrowDownRight size={18} /></a><a className="mail-link" href="mailto:rsb3748419@gmail.com">rsb3748419@gmail.com</a></div>
        </div>
        <aside className="hero-lab" aria-label="AI 활용 흐름">
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
        <a className="scroll-note" href="#approach">SCROLL TO EXPLORE <ArrowDownRight size={16} /></a>
      </section>

      <section className="signal-strip" aria-label="주요 AI 기술"><div><span>LANGGRAPH</span><b>✦</b><span>MULTI-AGENT</span><b>✦</b><span>VOICE AI</span><b>✦</b><span>RAG</span><b>✦</b><span>FASTAPI</span><b>✦</b><span>HUMAN-CENTERED AI</span></div></section>

      <section className="approach section-shell" id="approach">
        <div className="section-label"><span>01</span> POSITIONING</div>
        <div className="approach-grid">
          <div><p className="kicker">WHY AI APPLICATION</p><h2>모델을 고르는 사람에서<br /><em>AI가 일하는 방식을<br />설계하는 사람</em>으로.</h2></div>
          <div className="approach-copy"><p className="lead">좋은 AI 서비스는 가장 큰 모델이 아니라, <strong>사용자의 문제·필요한 근거·사람의 개입 지점</strong>이 분명한 서비스라고 생각합니다.</p><p>AI·빅데이터 전공 과정과 KDT 프로젝트에서 음성, 문서, 대화형 요청을 실제 서비스 흐름으로 연결했습니다. AI가 빠르게 초안을 만들고 반복 작업을 줄이되, 최종 판단과 품질 책임은 사람이 갖는 구조를 지향합니다.</p><div className="principle"><BrainCircuit size={22} /><span>AI가 할 일은 명확하게,<br /><strong>사람이 확인할 근거는 더 명확하게.</strong></span></div></div>
        </div>
      </section>

      <section className="capabilities" id="capabilities"><div className="section-shell">
        <div className="section-heading light"><div><div className="section-label"><span>02</span> AI CAPABILITIES</div><h2>기술 목록보다<br /><em>어떻게 쓰는지</em></h2></div><p>AI를 호출하는 데서 멈추지 않고 검색, 상태, 인터페이스, 배포까지 하나의 사용자 경험으로 연결합니다.</p></div>
        <div className="capability-grid">{aiCapabilities.map((capability) => { const Icon = capability.icon; return <article key={capability.title}><div className="capability-top"><Icon size={27} /><span>{capability.index}</span></div><h3>{capability.title}</h3><p>{capability.description}</p><div className="tool-list">{capability.tools.map((tool) => <code key={tool}>{tool}</code>)}</div></article>; })}</div>
      </div></section>

      <section className="projects section-shell" id="projects">
        <div className="section-heading"><div><div className="section-label"><span>03</span> SELECTED AI WORK</div><h2>AI가 맡은 역할과<br /><em>사람이 만든 기준</em></h2></div><p>대표 프로젝트를 AI의 입력·추론·행동·검증 흐름으로 다시 정리했습니다. 각 데모에서 실제 사용자 경로를 확인할 수 있습니다.</p></div>
        <div className="project-list">{featuredProjects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.name}>
          <div className="project-meta"><span>{project.number}</span><Icon size={25} /><p>{project.eyebrow}</p></div>
          <div className="project-body">
            <div className="project-heading"><div><p>{project.eyebrow}</p><h3>{project.name}</h3></div><div className="project-actions"><a href={project.url} target="_blank" rel="noreferrer">LIVE DEMO <ArrowUpRight size={17} /></a>{project.videoUrl && <a href={project.videoUrl} target="_blank" rel="noreferrer">DEMO VIDEO <ArrowUpRight size={17} /></a>}</div></div>
            <p className="project-statement">{project.statement.split("\n").map((line, index) => <span key={line}>{line}{index === 0 && <br />}</span>)}</p>
            <p className="project-summary">{project.summary}</p>
            <figure><div className="browser-bar"><span /><span /><span /><code>{project.name.toLowerCase().replaceAll(" ", "-")}.ai</code></div><Image src={project.image} alt={project.imageAlt} width={1265} height={712} sizes="(max-width: 760px) 100vw, 900px" /></figure>
            <div className="ai-human-grid"><div><span>AI ROLE</span><p>{project.aiPoint}</p></div><div><span>HUMAN DESIGN</span><p>{project.humanPoint}</p></div></div>
            <div className="flow"><span>AI FLOW</span><ol>{project.process.map((step, index) => <li key={step}><i>{String(index + 1).padStart(2, "0")}</i><strong>{step}</strong>{index < project.process.length - 1 && <b>→</b>}</li>)}</ol></div>
            <div className="project-role"><span>MY ROLE</span><p>{project.role}</p></div>
            <div className="tag-list">{project.tags.map((tag) => <code key={tag}>{tag}</code>)}</div>
          </div>
        </article>; })}</div>
      </section>

      <section className="workflow-section"><div className="section-shell">
        <div className="section-heading light"><div><div className="section-label"><span>04</span> AI WORKFLOW</div><h2>프롬프트에서<br /><em>검증 가능한 결과까지</em></h2></div><p>AI를 빠른 초안과 디버깅 파트너로 활용하되, 실행 결과와 사용자 경로로 최종 품질을 확인합니다.</p></div>
        <div className="workflow-grid">{aiWorkflow.map(([label, title, body], index) => <article key={label}><div><span>{String(index + 1).padStart(2, "0")}</span><i /></div><p>{label}</p><h3>{title}</h3><div className="workflow-line" /><small>{body}</small></article>)}</div>
        <div className="responsible-ai"><ShieldCheck size={28} /><div><span>RESPONSIBLE AI PRINCIPLE</span><strong>생성 속도보다 검증 가능성을 우선합니다.</strong></div><p>AI의 답을 그대로 적용하지 않고 공식 문서, 실행 결과, 검색 근거, 실제 사용자 경로로 확인합니다.</p></div>
      </div></section>

      <section className="archive section-shell" id="archive">
        <div className="section-heading"><div><div className="section-label"><span>05</span> ALL WORK</div><h2>기존 작업을 그대로 담은<br /><em>6개의 실행 기록</em></h2></div><p>대표 프로젝트뿐 아니라 데이터 안정성, 오디오 분류, 컴퓨터 비전 작업까지 모두 보존했습니다.</p></div>
        <div className="archive-grid">{archiveProjects.map((project, index) => { const Icon = project.icon; const content = <><div className="archive-top"><span>0{index + 1}</span><Icon size={23} /></div><p>{project.category}</p><h3>{project.title}</h3><div className="archive-description">{project.description}</div><div className="archive-tags">{project.tags.map((tag) => <code key={tag}>{tag}</code>)}</div><div className="archive-link">{project.url ? "OPEN PROJECT" : "CASE NOTE"}{project.url ? <ArrowUpRight size={16} /> : <Code2 size={16} />}</div></>; return project.url ? <a href={project.url} target="_blank" rel="noreferrer" key={project.title}>{content}</a> : <article key={project.title}>{content}</article>; })}</div>
      </section>

      <section className="about-section" id="about"><div className="section-shell">
        <div className="section-heading light"><div><div className="section-label"><span>06</span> ABOUT & PROOF</div><h2>배우고, 협업하고,<br /><em>끝까지 구현합니다.</em></h2></div><p>자기소개, 협업 방식, 교육과 자격 정보를 한곳에서 확인할 수 있습니다.</p></div>
        <div className="about-grid">
          <article className="collaboration-card"><div className="card-icon"><Users size={25} /></div><p>COLLABORATION</p><h3>역할보다 먼저<br />완료 기준을 맞춥니다.</h3><dl><div><dt>WHO</dt><dd>AI Human KDT 팀 프로젝트에서 기획·프론트엔드·백엔드·AI 역할의 팀원과 협업했습니다.</dd></div><div><dt>HOW</dt><dd>사용자 시나리오와 API 입출력 형식을 먼저 맞추고 Must·Should·Could로 범위와 완료 조건을 기록했습니다.</dd></div><div><dt>CONFLICT</dt><dd>개인의 선호보다 사용자 영향·구현 난이도·마감 위험을 기준으로 대안을 비교하고 작은 기능부터 검증했습니다.</dd></div></dl></article>
          <article className="profile-card"><div className="card-icon"><Zap size={25} /></div><p>LEARNING EVIDENCE</p><h3>AI를 이해하고<br />서비스로 옮긴 기록</h3><div className="proof-list"><div><span>EDUCATION</span><strong>용인대학교 AI학부 빅데이터전공</strong><small>3학년 이수 후 휴학 · 데이터/AI 기반 전공 학습</small></div><div><span>TRAINING</span><strong>AI Human KDT 7기</strong><small>AI 서비스 기획부터 구현·배포까지 프로젝트 기반 학습</small></div><div><span>QUALIFICATION</span><strong>AICE · 컴퓨터활용능력 필기</strong><small>데이터 활용과 업무 도구에 대한 기초 역량 검증</small></div></div></article>
        </div>
        <div className="base-stack"><div><Database size={21} /><span>DATA FOUNDATION</span></div><p>Python · Pandas · NumPy · SQL · ETL · Validation · Logging · Matplotlib · Streamlit · CNN · PyTorch · PostgreSQL</p></div>
      </div></section>

      <section className="contact" id="contact"><div className="contact-grid section-shell"><div className="contact-copy"><div className="section-label"><span>07</span> CONTACT</div><h2>AI가 필요한 문제를<br /><em>함께 풀어보겠습니다.</em></h2><p>인턴십, 주니어 포지션, AI 서비스 프로젝트 협업 이야기를 기다립니다. 모델 선택부터 사용자 경험과 배포까지 연결하겠습니다.</p><a href="mailto:rsb3748419@gmail.com"><Mail size={18} /> rsb3748419@gmail.com</a><div className="availability"><Gauge size={18} /><span>OPEN TO INTERNSHIP · JUNIOR ROLE · PROJECT</span></div></div><ContactForm /></div>
        <footer className="section-shell"><div className="brand"><span className="brand-orb"><Sparkles size={16} /></span><span>RSB.AI</span></div><p>AI WITH A CLEAR ROLE. OUTPUT WITH EVIDENCE.</p><a href="#top">BACK TO TOP <ArrowUpRight size={14} /></a></footer>
      </section>
    </main>
  );
}

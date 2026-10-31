"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { error?: string; reference?: number };
      if (!response.ok) throw new Error(result.error ?? "메시지를 저장하지 못했습니다.");
      form.reset();
      setStatus("success");
      setMessage(result.reference ? `문의가 저장되었습니다. 접수 번호는 #${result.reference}입니다.` : "문의가 저장되었습니다.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "잠시 후 다시 시도해 주세요.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-heading"><span>PROJECT INQUIRY</span><p>필수 항목 *</p></div>
      <div className="form-row"><label>이름 *<input name="name" required maxLength={60} placeholder="이름을 입력해 주세요" /></label><label>소속<input name="affiliation" maxLength={100} placeholder="회사 또는 팀 (선택)" /></label></div>
      <label>이메일 *<input name="email" type="email" required maxLength={160} placeholder="reply@example.com" /></label>
      <label>문의 내용 *<textarea name="message" required minLength={10} maxLength={2000} rows={5} placeholder="포지션이나 프로젝트에 대해 알려주세요." /></label>
      <label className="honeypot" aria-hidden="true">웹사이트<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <button type="submit" disabled={status === "sending"}>{status === "sending" ? <><LoaderCircle className="spin" size={19} /> 저장 중</> : <>메시지 보내기 <ArrowUpRight size={18} /></>}</button>
      {message && <output className={`form-message ${status}`} aria-live="polite">{status === "success" && <CheckCircle2 size={17} />}{message}</output>}
      <p className="privacy-note">보내기 버튼을 누르면 답변을 위해 이름, 이메일, 문의 내용이 저장됩니다.</p>
    </form>
  );
}

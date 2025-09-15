import InlineMailchimpForm from "./InlineMailchimpForm";

export default function FloatingJoinCard() {
  return (
    <aside className="rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 border border-slate-200
                      w-[400px] max-w-[88vw] p-8">
      <InlineMailchimpForm />
    </aside>
  );
}

import Button from "@/components/ui/Button";
import SectionTitle from "../ui/SectionHeading";

export default function BlogHero() {
  return (
    <section className="text-center py-16 bg-gradient-to-tr from-purple-600 to-indigo-700 text-white" dir="rtl">
      <div className="max-w-3xl mx-auto px-4">
        <SectionTitle heading="مرحبا بك في مدونتنا" label="المدونة" align="center" gradient />
        <p className="mt-4 text-lg">استكشف مقالاتنا حول البرمجة، التصميم، والتسويق الرقمي.</p>
        <Button className="mt-6">ابدأ القراءة</Button>
      </div>
    </section>
  );
}

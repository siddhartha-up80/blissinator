import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blissinator | Mental Health Counseling for Students and Everyone",
  description:
    "Your trusted destination for professional mental health counseling. We offer students, individuals and relationship people counseling services, helping you improve your emotional well-being. Get the support you need to lead a happier and more fulfilling life.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      <div className="">{children}</div>
    </section>
  );
}

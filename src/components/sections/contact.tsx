import { Github, Linkedin, Mail, Phone, type LucideIcon } from "lucide-react";

import { Section, SectionHeading } from "@/components/section-parts";
import { Button } from "@/components/ui/button";
import { contactLinks, sectionCopy, type ContactLink } from "@/lib/content";
import { ctaPrimary, ctaSecondary } from "@/lib/recipes";

const CONTACT_ICONS: Record<ContactLink["kind"], LucideIcon> = {
  email: Mail,
  phone: Phone,
  linkedin: Linkedin,
  github: Github,
};

export function Contact() {
  const section = sectionCopy.contact;

  return (
    <Section
      id="contact"
      label={section.sectionLabel}
      className="pb-24"
      innerClassName="text-center"
    >
      <SectionHeading section={section} className="mt-8 text-4xl md:text-6xl" />
      <p className="mx-auto mt-5 max-w-xl text-balance text-center text-base text-muted-foreground">
        {section.subtitle}
      </p>

      <div className="mx-auto mt-8 flex max-w-md flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
        {contactLinks.map(({ kind, label, href, external }, i) => {
          const Icon = CONTACT_ICONS[kind];
          return (
            <Button
              key={kind}
              asChild
              variant={i === 0 ? "default" : "outline"}
              className={i === 0 ? ctaPrimary : ctaSecondary}
            >
              <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                <Icon className="size-4" /> {label}
              </a>
            </Button>
          );
        })}
      </div>
    </Section>
  );
}

"use client";

import { useEffect, useRef } from "react";

interface HubSpotFormProps {
  portalId?: string;
  formId: string;
  className?: string;
}

export function HubSpotForm({
  portalId = "45317917",
  formId,
  className = "",
}: HubSpotFormProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    const loadForm = () => {
      if (
        containerRef.current &&
        (window as unknown as Record<string, unknown>).hbspt
      ) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).hbspt.forms.create({
          portalId,
          formId,
          target: containerRef.current,
        });
      }
    };

    if (!scriptLoaded.current) {
      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.charset = "utf-8";
      script.type = "text/javascript";
      script.async = true;
      script.onload = loadForm;
      document.head.appendChild(script);
      scriptLoaded.current = true;
    } else {
      loadForm();
    }
  }, [portalId, formId]);

  return <div ref={containerRef} className={className} />;
}

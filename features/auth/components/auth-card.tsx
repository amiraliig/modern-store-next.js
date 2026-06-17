
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type AuthCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerHref: string;
};

export function AuthCard({
  title,
  description,
  children,
  footerText,
  footerLinkText,
  footerHref,
}: AuthCardProps) {
  return (
    <Card className="w-full max-w-md border bg-background/80 shadow-2xl backdrop-blur-xl">
      <CardHeader className="space-y-2 text-center">
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>

      <CardContent className="space-y-6">
        {children}

        <p className="text-center text-sm text-muted-foreground">
          {footerText}{" "}
          <Link
            href={footerHref}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {footerLinkText}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
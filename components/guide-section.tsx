import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function GuideSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent>
        <div className="prose prose-invert max-w-none prose-p:text-sm prose-li:text-sm prose-a:font-medium">
          {children}
        </div>
      </CardContent>
    </Card>
  );
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg dark:hover:shadow-primary/10 h-full">
      <CardHeader className="flex flex-row items-center gap-2">
        <div className="p-2 rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center">
              <span className="text-primary mr-2">•</span> {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

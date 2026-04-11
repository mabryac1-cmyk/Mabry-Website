import { Phone, CheckCircle } from "lucide-react";

interface PhoneButton {
  label: string;
  number: string;
  tel: string;
}

interface GoalCompletionBlockProps {
  answerParagraph: string;
  phoneButtons: PhoneButton[];
  servingText?: string;
  servingNote?: string;
}

export function GoalCompletionBlock({
  answerParagraph,
  phoneButtons,
  servingText,
  servingNote,
}: GoalCompletionBlockProps) {
  const trustBullets = [
    "Licensed TACLB12058E",
    "Serving homeowners since 1986",
    "BBB A+ rated",
    "Flat-rate pricing — no hidden charges",
  ];

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 md:p-6 my-6" data-testid="goal-completion-block">
      <p className="text-lg font-medium text-gray-900 mb-4" data-testid="text-answer-paragraph">
        {answerParagraph}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        {phoneButtons.map((btn, i) => (
          <a
            key={i}
            href={`tel:${btn.tel}`}
            className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-5 rounded-lg text-base transition-colors min-h-[48px]"
            data-testid={`link-phone-cta-${i}`}
          >
            <Phone className="w-5 h-5 shrink-0" />
            {btn.label ? `${btn.label}: ${btn.number}` : btn.number}
          </a>
        ))}
      </div>

      {servingText && (
        <p className="text-sm text-muted-foreground mb-1" data-testid="text-serving-areas">
          {servingText}
        </p>
      )}
      {servingNote && (
        <p className="text-sm text-muted-foreground italic mb-3" data-testid="text-serving-note">
          {servingNote}
        </p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
        {trustBullets.map((bullet, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-accent shrink-0" />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

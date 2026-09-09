import React from 'react';

interface TicketCardProps {
  codeTag?: string;
  subtitle?: string;
  title: string;
  children: React.ReactNode;
  actionText?: string;
  onAction?: () => void;
  className?: string;
  notchColor?: string; // background color to match container
}

export const TicketCard: React.FC<TicketCardProps> = ({
  codeTag,
  subtitle,
  title,
  children,
  actionText,
  onAction,
  className = '',
  notchColor = 'var(--cloud)',
}) => {
  return (
    <div
      className={`ticket-card hover-lift card-shine rounded-xl p-5 relative overflow-hidden flex flex-col justify-between group ${className}`}
    >
      {/* Ticket Cutout Notches */}
      <div 
        className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-brass/30 z-10 pointer-events-none"
        style={{ backgroundColor: notchColor }}
      />
      <div 
        className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-brass/30 z-10 pointer-events-none"
        style={{ backgroundColor: notchColor }}
      />

      {/* Top Meta Zone */}
      <div>
        <div className="flex items-center justify-between border-b border-brass/20 pb-2.5 mb-3.5">
          {codeTag && (
            <span className="text-[11px] font-mono tracking-wider font-bold text-brass uppercase bg-brass/10 px-2 py-0.5 rounded">
              {codeTag}
            </span>
          )}
          {subtitle && (
            <span className="text-[11px] font-mono text-ink-soft uppercase tracking-wide">
              {subtitle}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-base sm:text-lg text-ink group-hover:text-brass transition-colors mb-2">
          {title}
        </h3>

        {/* Main Body */}
        <div className="text-xs sm:text-sm text-ink-soft leading-relaxed">
          {children}
        </div>
      </div>

      {/* Bottom Perforated Action Zone */}
      {actionText && (
        <div className="mt-4 pt-3 border-t border-dashed border-brass/30 flex items-center justify-between">
          <span className="text-[10px] font-mono text-ink-soft uppercase">
            Pass Document
          </span>
          <button
            onClick={onAction}
            className="text-xs font-mono font-bold text-brass hover:text-brass-soft transition-colors flex items-center space-x-1"
          >
            <span>{actionText}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

"use client";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="fixed top-16 left-0 w-full z-40 px-4 md:px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div
          className="w-full bg-progress-track/20 rounded-full h-2 relative overflow-hidden"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Progresso na página"
        >
          <div
            className="bg-progress-fill h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
          <div className="absolute inset-0 flex">
            <div className="w-1/4 border-r border-progress-track/20"></div>
            <div className="w-1/4 border-r border-progress-track/20"></div>
            <div className="w-1/4 border-r border-progress-track/20"></div>
            <div className="w-1/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

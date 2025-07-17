import { Film } from "lucide-react";
import pancakeLogo from "@/assets/pancake-logo.png";

export function AppHeader() {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center gap-4 mb-4">
        <img 
          src={pancakeLogo} 
          alt="Pancake Logo" 
          className="w-16 h-16 rounded-full shadow-md hover:shadow-lg transition-shadow duration-200"
        />
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-bold text-foreground font-cozy">
            Pancake Cinema
          </h1>
          <Film className="h-8 w-8 text-cinema-warm" />
        </div>
      </div>
      
      <p className="text-lg text-muted-foreground font-medium mb-2">
        Your cozy task companion
      </p>
      
      <div className="text-sm text-muted-foreground">
        ✨ Sunday brunch vibes meets productivity ✨
      </div>
    </header>
  );
}
import { useEffect, useState } from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            
            const target = e.target as HTMLElement;
            const isInteractive = target.tagName === 'A' || 
                                 target.tagName === 'BUTTON' ||
                                 target.closest('a') || 
                                 target.closest('button') ||
                                 target.style.cursor === 'pointer';
            setIsHovering(isInteractive as any);
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-150 ease-out"
                style={{
                    transform: `translate(${position.x - 4}px, ${position.y - 4}px) scale(${isHovering ? 0 : 1})`,
                }}
            >
                <div className="w-2 h-2 bg-[#FFCC00] rounded-full shadow-lg" />
            </div>

            {/* Outer ring */}
            <div
                className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out"
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px) scale(${isHovering ? 1.5 : 1})`,
                }}
            >
                <div 
                    className={`w-10 h-10 border rounded-full transition-colors duration-300 ${
                        isHovering ? 'border-white border-2' : 'border-[#FFCC00] border'
                    }`}
                    style={{
                        boxShadow: isHovering ? '0 0 20px rgba(255, 255, 255, 0.3)' : 'none'
                    }}
                />
            </div>

            {/* Cinematic lens corner brackets */}
            {isHovering && (
                <div
                    className="fixed top-0 left-0 pointer-events-none z-[9997] transition-all duration-300 ease-out"
                    style={{
                        transform: `translate(${position.x - 30}px, ${position.y - 30}px)`,
                    }}
                >
                    <svg width="60" height="60" viewBox="0 0 60 60" className="opacity-80">
                        {/* Top-left corner */}
                        <path d="M 10 15 L 10 10 L 15 10" stroke="white" strokeWidth="2" fill="none" />
                        {/* Top-right corner */}
                        <path d="M 45 10 L 50 10 L 50 15" stroke="white" strokeWidth="2" fill="none" />
                        {/* Bottom-left corner */}
                        <path d="M 15 50 L 10 50 L 10 45" stroke="white" strokeWidth="2" fill="none" />
                        {/* Bottom-right corner */}
                        <path d="M 50 45 L 50 50 L 45 50" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                </div>
            )}

            {/* Hide default cursor */}
            <style>{`
                * {
                    cursor: none !important;
                }
            `}</style>

            {/* Demo content for testing */}
         
        </>
    );
};

export default CustomCursor;
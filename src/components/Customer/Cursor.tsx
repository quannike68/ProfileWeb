

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";


const  Cursor  = ()  => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const width = useMotionValue(5);
  const height = useMotionValue(5);

  const springX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25 });
  const springW = useSpring(width, { stiffness: 250, damping: 30 });
  const springH = useSpring(height, { stiffness: 250, damping: 30 });

  const [hovered, setHovered] = useState(false);
  const [hoverRect, setHoverRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (hovered && hoverRect) {
        const centerX = hoverRect.left + hoverRect.width / 2;
        const centerY = hoverRect.top + hoverRect.height / 2;

        const offsetX = (e.clientX - centerX) * 0.2;
        const offsetY = (e.clientY - centerY) * 0.2;

        cursorX.set(centerX + offsetX - (hoverRect.width + 12) / 2);
        cursorY.set(centerY + offsetY - (hoverRect.height + 12) / 2);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".cursor-hover");
      if (target) {
        const rect = target.getBoundingClientRect();
        setHovered(true);
        setHoverRect(rect);
        width.set(rect.width + 12);
        height.set(rect.height + 12);
        target.classList.add("cursor-none");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(".cursor-hover");
      if (target) {
        setHovered(false);
        setHoverRect(null);
        target.classList.remove("cursor-none");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hovered, hoverRect, cursorX, cursorY, width, height]);

  return (
    <>
      <motion.div
        className="absolute top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
          width: springW,
          height: springH,
          willChange: "transform",
        }}
      >
        {hovered && (
          <div className="w-full h-full relative">
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2"></span>
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2"></span>
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2"></span>
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2"></span>
          </div>
        )}
      </motion.div>
    </>
  );
}


type CursorType = "default" | "text" | "pointer";

const  Cursor_1 = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 300, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 300, damping: 25 });

  const [cursorType, setCursorType] = useState<CursorType>("default");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.dataset.cursor === "pointer"
      ) {
        setCursorType("pointer");
      } else if (
        target.tagName === "P" ||
        target.tagName === "SPAN" ||
        target.tagName === "H1" ||
        target.tagName === "H2" ||
        target.tagName === "H3" ||
        target.dataset.cursor === "text"
      ) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <style>{`body { cursor: none; }`}</style>

      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: cursorType === "text" ? 3 : cursorType === "pointer" ? 40 : 16,
          height:
            cursorType === "text" ? 20 : cursorType === "pointer" ? 40 : 16,
          borderRadius: cursorType === "text" ? 0 : "50%",
          backgroundColor:
            cursorType === "pointer"
              ? "rgba(255,255,255,0.1)"
              : cursorType === "text"
              ? "#fbbf24"
              : "#60a5fa",
          boxShadow:
            cursorType === "text"
              ? "0 0 8px rgba(251,191,36,0.8)"
              : cursorType === "pointer"
              ? "0 0 0 2px rgba(255,255,255,0.5)"
              : "0 0 4px rgba(96,165,250,0.5)",
          scale: isClicked ? 1.3 : cursorType === "pointer" ? 1.5 : 1,
          opacity: 1,
          transition: { type: "spring", stiffness: 250, damping: 20 },
        }}
      />
    </>
  );
}

export { Cursor, Cursor_1 };
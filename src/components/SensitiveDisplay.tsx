"use client"

import { useState, useMemo } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { motion } from "framer-motion"

interface SensitiveDisplayProps {
  value?: string | number
  className?: string
  maskChar?: string
  showLastChars?: number
  isEditable?: boolean
  onValueChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  inputClassName?: string
}

export function SensitiveDisplay({
  value = "",
  className = "",
  maskChar = "•",
  showLastChars = 4,
  isEditable = false,
  onValueChange,
  placeholder,
  disabled,
  inputClassName,
}: SensitiveDisplayProps) {
  const [isVisible, setIsVisible] = useState(false)

  const strValue = String(value || "")

  const maskedValue = useMemo(() => {
    if (!strValue) return ""
    if (strValue.length <= showLastChars) return strValue
    return (
      maskChar.repeat(strValue.length - showLastChars) +
      strValue.slice(-showLastChars)
    )
  }, [strValue, maskChar, showLastChars])

  const toggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsVisible(!isVisible)
  }

  // Common Icon Component
  const ToggleIcon = (
    <motion.div
      initial={false}
      animate={{ rotate: isVisible ? 180 : 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      className="flex items-center justify-center text-muted-foreground hover:text-foreground"
    >
      {isVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </motion.div>
  )

  if (isEditable) {
    return (
      <div className={`relative ${className}`}>
        <div className="relative">
          {/* Input Layer */}
          <Input
            type="text"
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onValueChange?.(e.target.value)}
            className={`${inputClassName} font-mono pr-10 transition-colors duration-200 ${!isVisible && value ? "text-transparent" : "text-foreground"
              }`}
          />

          {/* Mask Layer - Absolute overlay */}
          <div
            className={`pointer-events-none absolute inset-0 flex items-center px-3 font-mono text-sm transition-opacity duration-200 ${!isVisible && value ? "opacity-100" : "opacity-0"
              }`}
          >
            {maskedValue}
          </div>
        </div>

        <button
          type="button"
          onClick={toggleVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 disabled:opacity-50 z-10 p-1"
          disabled={disabled}
          title={isVisible ? "Hide value" : "Show value"}
        >
          {ToggleIcon}
        </button>
      </div>
    )
  }

  // Read-only view
  if (!value) return <span className="text-muted-foreground">N/A</span>

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Grid stack to prevent layout shift: widest element defines width */}
      <div className="grid font-mono overflow-hidden">
        {/* Visible layer */}
        <span
          className="col-start-1 row-start-1 transition-opacity duration-300"
          style={{ opacity: isVisible ? 1 : 0 }}
        >
          {strValue}
        </span>
        {/* Masked layer */}
        <span
          className="col-start-1 row-start-1 transition-opacity duration-300"
          style={{ opacity: isVisible ? 0 : 1 }}
        >
          {maskedValue}
        </span>
        {/* Invisible spacers to reserve max width of either state */}
        <span
          className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          {strValue}
        </span>
        <span
          className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none"
          aria-hidden="true"
        >
          {maskedValue}
        </span>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="h-5 w-5 hover:bg-transparent"
        onClick={toggleVisibility}
        title={isVisible ? "Hide value" : "Show value"}
      >
        {ToggleIcon}
        <span className="sr-only">Toggle visibility</span>
      </Button>
    </div>
  )
}

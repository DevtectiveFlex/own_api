export default function errorBuilder<T>(status: number, message: string, errorInstanse?: T) {
  return {
    status,
    message,
    errorInstanse,
  }
}
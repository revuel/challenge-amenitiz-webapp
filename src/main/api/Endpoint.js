/**
 * To DRY, "BASE" backend URL is built here
 * @returns {`${string}${string}`}
 */
export const getEndPoint = () => {
  return `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PORT}`
}
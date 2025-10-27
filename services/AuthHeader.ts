export default function authHeader() {
  const user = localStorage.getItem('user')
  console.log(user)
  if (user) {
    try {
      const parsedUser = JSON.parse(user)
      return { Authorization: `Bearer ${parsedUser.accessToken}` }
    } catch (error) {
      console.error('Error parsing user JSON:', error)
      return {}
    }
  }

  return {}
}

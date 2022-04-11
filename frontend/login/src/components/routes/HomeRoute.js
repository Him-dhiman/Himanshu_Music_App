import React, { useState, useRef } from "react"
import { useAuth } from "../../contexts/AuthContext"
import {Button} from "react-bootstrap"
import { useHistory } from "react-router-dom"

const Dashboard = () => {

  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  const handleLogout = async() => {
      setError("")

      try {
          await logout()
          history.push("/login")
      } catch {
          setError("Failed to log out")
      }
  }

  return(<div>
    <p>home route</p>
    <Button variant="outline-secondary"  onClick={handleLogout}>
        Log Out
    </Button>
    </div>
  )
}

export default Dashboard;

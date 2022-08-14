package controllers

import (
	"github.com/deandemo/react-go-heroku/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

var todos []models.Todo

func GetTodos(c *gin.Context) {
	c.JSON(http.StatusOK, todos)
}

func AddTodo(c *gin.Context) {
	var todo models.Todo
	c.BindJSON(&todo)
	todos = append(todos, todo)
	c.JSON(http.StatusOK, todo)
}

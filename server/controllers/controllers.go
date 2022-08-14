package controllers

import (
	"encoding/json"
	"fmt"
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

func GetItems(c *gin.Context) {
	keyword := c.Param("keyword")
	api := fmt.Sprintf("https://shopee.sg/api/v4/search/search_items?by=relevancy&keyword=%s&limit=20&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&version=2", keyword)
	res, _ := http.Get(api)
	defer res.Body.Close()
	c.JSON(http.StatusOK, nil)
	var j interface{}
	err := json.NewDecoder(res.Body).Decode(&j)
	if err != nil {
		panic(err)
	}
	fmt.Printf("%s", j)
	c.JSON(http.StatusOK, j)
}

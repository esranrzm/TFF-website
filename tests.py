import unittest
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def register():
########## REGISTER TEST ##############
    driver = webdriver.Chrome()

    # Test successful registration
    driver.get('http://localhost:3000/register')
    name_field = driver.find_element(By.NAME,"name")
    name_field.send_keys('testUser')
    email_field = driver.find_element(By.NAME,'email')
    email_field.send_keys('test@mail.com')
    password_field = driver.find_element(By.NAME,'password')
    password_field.send_keys('test123')
    confirm_password_field = driver.find_element(By.NAME,'password2')
    confirm_password_field.send_keys('test123')
    driver.find_element(By.CSS_SELECTOR, 'button[type=register]').click()
    WebDriverWait(driver, 10).until(
        EC.url_to_be('http://localhost:3000/')
    )

    time.sleep(5)
    driver.close()

def cannotRegister():
    driver = webdriver.Chrome()

    # Test error message for mismatched passwords
    driver.get('http://localhost:3000/register')
    name_field = driver.find_element(By.NAME,'name')
    name_field.send_keys('testUser')
    email_field = driver.find_element(By.NAME,'email')
    email_field.send_keys('test@mail.com')
    password_field = driver.find_element(By.NAME,'password')
    password_field.send_keys('test1111')
    confirm_password_field = driver.find_element(By.NAME,'password2')
    confirm_password_field.send_keys('invalid')
    driver.find_element(By.CSS_SELECTOR, 'button[type=register]').click()

    time.sleep(5)
    driver.close()

def load_home_page():
########### LOAD HOMEPAGE TEST ############
    driver = webdriver.Chrome()
    # driver.get("http://localhost:8000/login")
    # Test the home page
    driver.get('http://localhost:3000/')
    # assert driver.title == 'My MERN App'
    time.sleep(5)
    driver.close()
    
def login():
########## LOGIN TEST #############
    driver = webdriver.Chrome()
    
    # Test the login form
    driver.get('http://localhost:3000/login')
    email_field = driver.find_element(By.NAME,'email')
    email_field.send_keys('user@mail.com')
    password_field = driver.find_element(By.NAME,'password')
    password_field.send_keys('user123')
    driver.find_element(By.CSS_SELECTOR, 'button[type=login]').click()
    WebDriverWait(driver, 10).until(
        EC.url_to_be('http://localhost:3000/')
    )
    time.sleep(5)
    driver.close()

def cannotLogin():
    driver = webdriver.Chrome()
    
    # Test the failed login form
    driver.get('http://localhost:3000/login')
    email_field = driver.find_element(By.NAME,'email')
    email_field.send_keys('user111@mail.com')
    password_field = driver.find_element(By.NAME,'password')
    password_field.send_keys('user122')
    driver.find_element(By.CSS_SELECTOR, 'button[type=login]').click()
    
    time.sleep(5)
    driver.close()

def top5Teams():
    driver = webdriver.Chrome()
    
    # Test the login form
    driver.get('http://localhost:3000/login')
    email_field = driver.find_element(By.NAME,'email')
    email_field.send_keys('user@mail.com')
    password_field = driver.find_element(By.NAME,'password')
    password_field.send_keys('user123')
    driver.find_element(By.CSS_SELECTOR, 'button[type=login]').click()
    WebDriverWait(driver, 10).until(
        EC.url_to_be('http://localhost:3000/')
    )

    driver.find_element(By.CSS_SELECTOR, 'button[type=top5]').click()

    time.sleep(5)
    driver.close()

def adminLogin():
########## LOGIN TEST #############
    driver = webdriver.Chrome()
    
    # Test the login form
    driver.get('http://localhost:3000/loginAdmin')
    email_field = driver.find_element(By.NAME,'email')
    email_field.send_keys('admin@mail.com')
    password_field = driver.find_element(By.NAME,'password')
    password_field.send_keys('admin123')
    driver.find_element(By.CSS_SELECTOR, 'button[type=adminLogin]').click()
    WebDriverWait(driver, 10).until(
        EC.url_to_be('http://localhost:3000/adminprofilepage')
    )
    time.sleep(5)
    driver.close()

def adminViewAllPlayers():
########## LOGIN TEST #############
    driver = webdriver.Chrome()
    
    # Test the login form
    driver.get('http://localhost:3000/loginAdmin')
    email_field = driver.find_element(By.NAME,'email')
    email_field.send_keys('admin@mail.com')
    password_field = driver.find_element(By.NAME,'password')
    password_field.send_keys('admin123')
    driver.find_element(By.CSS_SELECTOR, 'button[type=adminLogin]').click()
    WebDriverWait(driver, 10).until(
        EC.url_to_be('http://localhost:3000/adminprofilepage')
    )
    driver.find_element(By.CSS_SELECTOR, 'button[type=allPlayers]').click()
    driver.find_element(By.CSS_SELECTOR, 'button[type=details]').click()

    time.sleep(5)
    driver.close()

    
if __name__ == "__main__":
    register()
    cannotRegister()
    load_home_page()
    login()
    cannotLogin()
    top5Teams()
    adminLogin()
    adminViewAllPlayers()
    
    

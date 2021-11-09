import { BaseLogger, MongoLogger, ElasticLogger} from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")

let loggerType = new ElasticLogger()
let userService = new UserService(loggerType)

let user1 = new User(1,"Recep","Yavuz","İstanbul")

let user2 = new User(2,"Emre","Demir","Ankara")

userService.add(user1)
userService.add(user2)
console.log(userService.list())
console.log(userService.getById(2))

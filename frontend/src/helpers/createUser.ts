import type { User } from "../types/apptypes"

export const createUser = (form) => {
   const newUser : User = {
            userCredentials : form
        }
        //guardar newUser en bd
}
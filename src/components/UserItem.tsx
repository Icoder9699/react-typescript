import { FC } from "react";
import { IUser } from "../types/types";

export enum UserVariant {
    success = "green",
    fail    = "red"
}

interface UserItemProps {
    user: IUser,
    variant?: UserVariant
}


const UserItem: FC<UserItemProps> = ({user, variant}) => {

    return (
        <div 
            style={{
                margin: "10px", 
                padding: '10px', 
                border: variant === UserVariant.success ? "1px solid green" : 'none',
                background: variant === UserVariant.fail ? "red" : "none"
            }}
        >
           <p>{user.id} {user.name} проживает в городе {user.address.city} на улице {user.address.street}</p>
        </div>
    )
}

export default UserItem
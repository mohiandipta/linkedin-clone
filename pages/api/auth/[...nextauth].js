import nextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import {MongoDBAdapter} from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';

export default nextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.JWT_SECRET,
    adapter: MongoDBAdapter(clientPromise)
})

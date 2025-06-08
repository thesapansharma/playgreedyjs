import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';
import {CurrencyTransaction} from '../models/CurrencyTransaction.entity.js';
import User from '../models/User.js';
import Tournament from '../models/Tournament.js';
import TournamentParticipant from '../models/TournamentParticipant.js';
import Transaction from '../models/Transaction.js';
import UserReward from '../models/UserReward.js';
import Leaderboard from '../models/Leaderboard.js';
import Game from '../models/Game.js';
import GameSession from '../models/GameSession.js';
import GamesPlayedHistory from '../models/GamesPlayedHistory.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const COMPONENTS = {
  Dashboard: componentLoader.add('Dashboard', path.join(__dirname, './dashboard.js')),
}
const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  branding: {
    companyName: 'Playgreedy',
    logo: 'https://i.ibb.co/WN4WNpZN/lgo1-removebg-preview.png',      // ✅ Your logo URL
    favicon: 'https://i.ibb.co/WN4WNpZN/lgo1-removebg-preview.png', 
    withMadeWithLove: false
  },
  dashboard: {
    component: COMPONENTS.Dashboard,
  },
  resources: [User,UserReward,Tournament,TournamentParticipant,Leaderboard,Game,GameSession,GamesPlayedHistory,Transaction,CurrencyTransaction]
};

export default options;

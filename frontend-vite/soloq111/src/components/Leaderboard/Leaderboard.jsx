import React from 'react'
import './Leaderboard.css'
import { useParams } from 'react-router-dom';

const Leaderboard = () => {

    const param = useParams();

    return (
        <>
            <h1> { param.elo } </h1>
            <table class="table" data-bs-theme="dark">
                
                <thead>
                    <tr>
                    <th scope="col">Ranking</th>
                    <th scope="col">Streamer</th>
                    <th scope="col">Cuenta</th>
                    <th scope="col">Linea</th>
                    <th scope="col">Elo</th>
                    <th scope="col">Wins</th>
                    <th scope="col">Losess</th>
                    <th scope="col">Winrate</th>
                    <th scope="col">Stream</th>
                    <th scope="col">OP.GG</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Juan</td>
                        <td>Otto</td>
                        <td>ADC</td>
                        <td>
                            <img src="https://static.bigbrain.gg/assets/lol/s12_rank_icons/challenger.png" width="30" height="24" class="d-inline-block align-text-top"></img>
                        </td>
                        <td>7</td>
                        <td>3</td>
                        <td>70%</td>
                        <td>
                            <img src="https://assets.twitch.tv/assets/favicon-32-e29e246c157142c94346.png" width="24" height="24" class="d-inline-block align-text-top"></img>
                        </td>
                        <td>
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="16" fill="none">
                                <path fill="currentColor" fill-rule="evenodd" d="M8.025 12.203C5.7 12.203 3.808 10.318 3.808 8S5.7 3.796 8.025 3.796 12.241 5.682 12.241 8s-1.891 4.203-4.216 4.203M8.025 0C3.6 0 0 3.589 0 8s3.6 8 8.025 8 8.025-3.589 8.025-8-3.6-8-8.025-8m17.517 8.498H21.18V3.7h4.362c1.505 0 1.964 1.412 1.964 2.398 0 1.017-.46 2.399-1.964 2.399m5.754-2.399c0-3.44-2.357-6.096-5.736-6.096h-7.98v15.984h3.6v-3.792h4.38c3.258 0 5.736-2.638 5.736-6.096m10.656.938H49.1c.018.2.04.516.055.96.027.744-.013 1.2-.163 2.098-.608 3.635-3.43 5.894-7.365 5.894-4.421 0-8.018-3.585-8.018-7.992 0-4.408 3.597-7.994 8.017-7.994a8.01 8.01 0 0 1 6.135 2.85l.226.268-.292.194-2.593 1.724-.216.144-.182-.186c-.82-.835-1.912-1.224-3.078-1.224-2.375 0-4.308 1.855-4.308 4.224 0 2.367 1.933 4.294 4.309 4.294 2.008 0 3.34-1.13 3.6-2.392h-3.275zm23.986.002h-7.15v2.862h3.277c-.261 1.26-1.593 2.392-3.602 2.392-2.375 0-4.308-1.927-4.308-4.295s1.933-4.223 4.308-4.223c1.165 0 2.258.389 3.078 1.224l.182.186.217-.144 2.592-1.724.293-.194-.227-.268a8.01 8.01 0 0 0-6.135-2.85c-4.42 0-8.017 3.586-8.017 7.993 0 4.408 3.596 7.993 8.017 7.993 3.936 0 6.758-2.258 7.366-5.894.15-.898.19-1.354.163-2.098-.015-.444-.037-.76-.055-.96m-36.269 7.326a1.626 1.626 0 0 1 3.254 0 1.626 1.626 0 0 1-3.254 0" clip-rule="evenodd"></path>
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Leaderboard
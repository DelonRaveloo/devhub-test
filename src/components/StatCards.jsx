import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function StatCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div>
                <p className="text-gray-500 text-sm">Nombre de tâches</p>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">125</h2>
                </div>
                <AssignmentTurnedInIcon className="text-blue-500" sx={{ fontSize: 40 }} />
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div>
                <p className="text-gray-500 text-sm">Progression</p>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">78%</h2>
                </div>
                <TrendingUpIcon className="text-green-500" sx={{ fontSize: 40 }} />
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                <div>
                <p className="text-gray-500 text-sm">Heures totales</p>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">42h</h2>
                </div>
                <AccessTimeIcon className="text-orange-500" sx={{ fontSize: 40 }} />
            </div>
        </div>
    );
}
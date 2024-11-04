import Accordian from "../accordian";
import RandomColor from "../randomcolor";
import TicTac from "../tictactoe";
import LDMode from "../whitedarkmode";
import menus from "../menu/data";
import TreeView from "../menu";
import { useContext } from "react";
import { FeatureFlagContext } from "./context";

export default function FeatureFlags() {
    const { enableFlags } = useContext(FeatureFlagContext);

    const componentsToRender = [
        {
            key: 'showLightandDarkMode',
            component: <LDMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTac />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordian',
            component: <Accordian />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        }
    ];

    function checkEnableKey(getCurr) {
        console.log("Checking flag for:", getCurr, "Flag value:", enableFlags[getCurr]);  // Debugging log
        return enableFlags[getCurr];
    }

    return (
        <div>
            <h1>Feature Flags</h1>
            {componentsToRender.map((item) =>
                checkEnableKey(item.key) ? item.component : null
            )}
        </div>
    );
}

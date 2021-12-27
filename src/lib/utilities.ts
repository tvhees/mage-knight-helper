export const calculatePlayerScore = (data) => {
    return data.fame + 
        data.spells * 2 + data.actions + 
        data.artifacts * 2 + Math.floor(data.crystals / 2) + 
        data.healthy + Math.floor(data.wounded / 2) + 
        data.fortified * 2 + data.adventure * 2 - 
        data.wounds * 2 + 
        data.cityleader * 7 + data.cityfollower * 4;
}
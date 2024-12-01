const TopStartContainer = document.getElementById('top_start_container');
const MissionStartBtn = document.getElementById('mission_start_btn');
const MissionContainer = document.getElementById('mission_container');
MissionStartBtn.addEventListener('click', () => {
    TopStartContainer.style.display = 'none';
    MissionContainer.classList.remove('hidden');
});

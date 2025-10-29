const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navLinks.classList.toggle('open');
    });
}

navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-button');
    const competitionCards = Array.from(document.querySelectorAll('.competition-card'));
    const competitionFeed = document.getElementById('competition-feed');
    const sortSelect = document.getElementById('competition-sort');

    let activeFilter = 'all';

    function applyCompetitionFilters() {
        const sortValue = sortSelect?.value ?? 'newest';

        const filteredCards = competitionCards.filter(card => {
            if (activeFilter === 'all') return true;
            return card.dataset.category === activeFilter;
        });

        const sortedCards = filteredCards.sort((a, b) => {
            const dateA = new Date(a.dataset.date);
            const dateB = new Date(b.dataset.date);
            const popularityA = Number(a.dataset.popularity) || 0;
            const popularityB = Number(b.dataset.popularity) || 0;

            switch (sortValue) {
                case 'deadline':
                    return dateA - dateB;
                case 'popular':
                    return popularityB - popularityA;
                case 'newest':
                default:
                    return dateB - dateA;
            }
        });

        competitionCards.forEach(card => card.classList.add('hidden'));
        sortedCards.forEach(card => card.classList.remove('hidden'));

        if (competitionFeed) {
            competitionFeed.innerHTML = '';
            sortedCards.forEach(card => competitionFeed.appendChild(card));
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            activeFilter = button.dataset.filter ?? 'all';
            applyCompetitionFilters();
        });
    });

    sortSelect?.addEventListener('change', applyCompetitionFilters);
    applyCompetitionFilters();

    const searchInput = document.getElementById('tutor-search');
    const specialityChips = document.querySelectorAll('.chip');
    const tutorCards = document.querySelectorAll('.tutor-card');
    let activeSpeciality = 'all';

    function filterTutors() {
        const query = (searchInput?.value || '').toLowerCase();

        tutorCards.forEach(card => {
            const speciality = card.dataset.speciality || '';
            const textContent = card.textContent?.toLowerCase() ?? '';
            const matchesSpeciality = activeSpeciality === 'all' || speciality === activeSpeciality;
            const matchesQuery = textContent.includes(query);

            if (matchesSpeciality && matchesQuery) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    specialityChips.forEach(chip => {
        chip.addEventListener('click', () => {
            specialityChips.forEach(ch => ch.classList.remove('active'));
            chip.classList.add('active');
            activeSpeciality = chip.dataset.speciality ?? 'all';
            filterTutors();
        });
    });

    searchInput?.addEventListener('input', filterTutors);
    filterTutors();
});

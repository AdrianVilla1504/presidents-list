import { getPresidents, getCityById } from '../services/presidents.js';

$(function() {
    function fillPresidentSelect(presidents) {
        const select = $("#presidentSelect");
        presidents.map((president) => {
            const option = $("<option>").val(president.name).text(president.name).data("president", president);
            select.append(option);
        });
    }

    async function showPresidentInfo(president) {
        const card = $("#presidentCard");
        card.empty();

        if (!president) {
            card.text("Seleccione un presidente en el selector");
            return;
        }

        const city_data = await getCityById(president.cityId);

        const imageContainer = $("<div>").attr("id", "presidentImageContainer");
        const image = $("<img>").attr("src", president.image).attr("alt", president.name);

        imageContainer.append(image);

        const name = $("<h2>").html(`<strong>${president.name} ${president.lastName}</strong>`);
        const startPeriodDate = $("<p>").html(`<strong>Inicio del periodo:</strong> ${president.startPeriodDate}`);
        const endPeriodDate = $("<p>").html(`<strong>Fin del periodo:</strong> ${president.endPeriodDate}`);
        const politicalParty = $("<p>").html(`<strong>Partido político:</strong> ${president.politicalParty}`);
        const description = $("<p>").text(president.description);        
        const city = $("<p>").html(`<strong>Ciudad:</strong> ${city_data.name}`);


        card.append(imageContainer, name, startPeriodDate, endPeriodDate, politicalParty, description, city);
    }

    getPresidents().then((response) => {
        
        fillPresidentSelect(response);
    });

    $(function() {
        const selectedPresident = $("#presidentSelect").find("option:selected").data("president");
        showPresidentInfo(selectedPresident);
    });

    $("#presidentSelect").on('change', function() {
        const selectedPresident = $(this).find("option:selected").data("president");
        showPresidentInfo(selectedPresident);
    });

   
});

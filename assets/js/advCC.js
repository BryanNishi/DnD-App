$(document).ready(function reset() {

    var subraces = [{
        dragon: ["Black", "Blue", "Brass", "Bronze", "Copper", "Gold", "Green", "Red", "Silver", "White"],
        dwarf: ["Hill Dwarf", "Mountain Dwarf"],
        elf: ["High Elf", "Wood Elf", "Dark Elf"],
        gnome: ["Forrest", "Rock"],
        halfling: ["Lightfoot", "Stout"]
    }]

    $("#charClass").change(function () {
        charClass = $("#charClass").val();

        switch (charClass) {

            case "Barbarian":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/barb.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Barbarian</h5><p class="card-text">Hit Die: d12, Primary Ability: Strength, Saving Throw Proficiencies: Strength & Constitution, Armor and Weapon Proficiencies: Light and medium armor, shields, simple and martial weapons</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Bard":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/bard.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Bard</h5><p class="card-text">Hit Die: d8, Primary Ability: Charisma, Saving Throw Proficiencies: Dexterity & Charisma, Armor and Weapon Proficiencies: Light armor, shields, simple weapons, hand crossbows, longswords, rapiers, shortswords</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Cleric":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/cleric.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Cleric</h5><p class="card-text">Hit Die: d8, Primary Ability: Wisdom, Saving Throw Proficiencies: Wisdom & Charisma, Armor and Weapon Proficiencies: Light and medium armor, shields, simple weapons</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Druid":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/druid.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Druid</h5><p class="card-text">Hit Die: d8, Primary Ability: Wisdom, Saving Throw Proficiencies: Intelligence & Wisdom, Armor and Weapon Proficiencies: Light and medium armor, shields, clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Fighter":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/fighter.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Fighter</h5><p class="card-text">Hit Die: d10, Primary Ability: Strength or Dexterity, Saving Throw Proficiencies: Strength & Constitution, Armor and Weapon Proficiencies: All armor, shields, simple and martial weapons</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Monk":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/monk.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Monk</h5><p class="card-text">Monk stat modifiers</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Paladin":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/paladin.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Paladin</h5><p class="card-text">Paladin stat modifiers</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Ranger":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/ranger.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Ranger</h5><p class="card-text">Ranger stat modifiers</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Rogue":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/rogue.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Rogue</h5><p class="card-text">Rogue stat modifiers</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Scorcerer":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/sorcerer.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Scorcerer</h5><p class="card-text">Scorcerer stat modifiers</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Warlock":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/warlock.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Warlock</h5><p class="card-text">Warlock stat modifiers</p></div></div>')
                $("#selectionCard").html(card);
                break;
            case "Wizard":
                var card = $('<div class="card"><img class="card-img-top" src="assets/images/wizard.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Wizard</h5><p class="card-text">Wizard stat modifiers</p></div></div>')
                $("#selectionCard").html(card);
                break;

        }

    });

    $("#charRace").change(function () {
        race = $("#charRace").val();
        $("#charSubRace").empty();

        switch (race) {
            case "Dragonborn":
                for (var j = 0; j < subraces[0].dragon.length; j++) {
                    var a = $("<option value=" + subraces[0].dragon[j] + ">" + subraces[0].dragon[j] + "</option>");
                    $("#charSubRace").append(a);
                }
                break;
            case "Dwarf":
                for (var j = 0; j < subraces[0].dwarf.length; j++) {
                    var a = $("<option value=" + subraces[0].dwarf[j] + ">" + subraces[0].dwarf[j] + "</option>");
                    $("#charSubRace").append(a);
                }
                break;
            case "Elf":
                for (var j = 0; j < subraces[0].elf.length; j++) {
                    var a = $("<option value=" + subraces[0].elf[j] + ">" + subraces[0].elf[j] + "</option>");
                    $("#charSubRace").append(a);
                }
                break;
            case "Gnome":
                for (var j = 0; j < subraces[0].gnome.length; j++) {
                    var a = $("<option value=" + subraces[0].gnome[j] + ">" + subraces[0].gnome[j] + "</option>");
                    $("#charSubRace").append(a);
                }
                break;
            case "Halfling":
                for (var j = 0; j < subraces[0].halfling.length; j++) {
                    var a = $("<option value=" + subraces[0].halfling[j] + ">" + subraces[0].halfling[j] + "</option>");
                    $("#charSubRace").append(a);
                }
                break;
            case "Half-Elf":
            case "Half-Orc":
            case "Human":
            case "Tiefling":
                console.log("no options");
                var none = "No Options";
                var a = $("<option value='none'>" + none + "</option>");
                $("#charSubRace").html("a");;
        }

    });

    // Dice Roll Function
    var rolls = [];

    $(".diceRoll").on("click", function () {
        event.preventDefault();
        $("#Str").empty();
        $("#Dex").empty();
        $("#Con").empty();
        $("#Int").empty();
        $("#Wis").empty();
        $("#Cha").empty();

        for (i = 0; i < 6; i++) {
            var result = Math.floor((Math.random() * 18) + 1);
            rolls.push(result);
            var a = $("<option value=" + result + ">" + result + "</option>");
            console.log(a);
            $(".abilityScore").append(a);
        }
        console.log("Rolls", rolls);
    })

    function playerChar(name, charClass, lvl, race, subrace, xp, xpToLvl, alignment, diety, languages, size, gender, charAge, height, weight, eyes,
        hair, profBonus, inspiration, str, dex, con, int, wis, cha, carried, encumb, hvyEncumb, drag, ac, init, speed, hpMax, hpCurr, hitDice,
        hitDiceCurr, spellAbil, spellDC, spellBonus, weaponMain, weaponOff, weaponThird, proficiencies) {
        this.Name = name;
        this.charClass = charClass;
        this.Level = lvl;
        this.Race = race;
        this.Subrace = subrace;
        this.XP = xp;
        this.XPtoLvl = xpToLvl;
        this.Alignment = alignment;
        this.Diety = diety;
        this.Languages = languages;
        this.Size = size;
        this.Gender = gender;
        this.charAge = charAge;
        this.Height = height;
        this.Weight = weight;
        this.Eyes = eyes;
        this.Hair = hair;
        this.ProficencyBonus = profBonus;
        this.Inspiration = inspiration;
        this.Strength = str;
        this.Dexterity = dex;
        this.Constitution = con;
        this.Intelligence = int;
        this.Wisdom = wis;
        this.Charisma = cha;
        this.WeightCarried = carried;
        this.Encumbered = encumb;
        this.HeavilyEncumbered = hvyEncumb;
        this.PushPullDrag = drag;
        this.ArmorClass = ac;
        this.Iniative = init;
        this.Speed = speed;
        this.MaxHP = hpMax;
        this.CurrentHP = hpCurr;
        this.HitDice = hitDice;
        this.CurrentHitDice = hitDiceCurr;
        this.SpellAbility = spellAbil;
        this.SpellDC = spellDC;
        this.SpellBonus = spellBonus;
        this.MainWeapon = weaponMain;
        this.OffhandWeapon = weaponOff;
        this.ThirdWeapon = weaponThird;
        this.Proficiencies = proficiencies;
    }
});
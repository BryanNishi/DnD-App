$(document).ready(function reset() {

    $(".createStart").show();
    $(".createBtns").hide();
    $(".createForm").hide();
    $("#description").hide();


    $("#PC").on("click", function () {
        $(".createBtns").show();
        $(".createStart").hide();
        $(".createForm").show();
        $("#description").show();
    });

    $("#NPC").on("click", function () {
        $(".createBtns").show();
        $(".createStart").hide();
    });

    $("#back").on("click", function () {
        reset();
    });

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
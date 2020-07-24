import React from "react";

const Help = () => {
  return (
    <>
      <h1>POJOmon!</h1>
      When logging in for the first-time, user will be presented with an egg
      that will hatch in 10 seconds After hatching your monster will be very
      hungry and have low strength
      <h1>Stats</h1>
      <p>
        Select the STAT tab to see your monster’s statistics - Name:
        Monster-name - Age: Age of monster in days - Weight: POJOmon weight in
        KG’s - Hunger: Shows how hungry monster is (0-5) - Strength: Shows how
        strong monster is (0-5) - Evolution Timer: Countdown timer until next
        evolution
      </p>
      <h1>Feeding</h1>
      <p>
        Select the FEED tab and select FOOD to restore 0/5 of monster’s HUNGER
        meter. - Hunger depletes approx. every 3-5 hours Select the FEED tab and
        select VITAMIN to restore 1/5 of monster’s STRENGTH meter. - Strength
        depletes approx. every 6-8 hours
      </p>
      <h1>Poop</h1>
      <p>
        Your monster eats and so it will poop! - Approx. every 5-6 hours Press
        the POOP icon to clean up poop. If you don’t clean up after you monster
        and it poops 4 times your monster will become SICK
      </p>
      <h1>Healing</h1>
      <p>
        Select the BANDAID icon to cure your monster’s sickness If your monster
        is SICK for too long it may DIE
      </p>
      <h1>Death</h1>
      <p>
        When logging in you may be greeted with a TOMBSTONE instead of a monster
        this indicates you let your poor pet DIE… Click on the RESET link to
        restart and get a new egg. Your monster has hidden death value that when
        it reaches 0 your pet will DIE; you can never see what this value is and
        will only know it’s zero when you get a TOMBSTONE. Causes of death: -
        Monster has empty HUNGER (0/5) meter for 1 hour (-1 point) - Monster has
        empty STRENGTH (0/5) meter for 1 hour (-1 point) - Monster get SICK (-1
        point) - Monster is SICK for 1 hour (-1 point) Note: Effects can stack
        Death value can not be recovered however when you monster EVOLVES to the
        next stage the value is reset, so even if your pet nearly dies in one
        form it will start fresh in the next evolution.
      </p>
      <h1>Evolution</h1>
      <p>
        EVOLUTION happens if your monster does not die from neglect when you log
        into the game and the EVOLUTION TIMER counted down to zero. A popup will
        show with a choice of available monsters for your monster to EVOLVE
        into, Press/Click on one of the choices to select it and complete the
        transformation! Evolution order: Egg -> Baby -> In-Training -> Rookie ->
        Champion -> Ultimate 10sec -> 1min -> 1hour -> 12hours -> 24hours ->
        Final
      </p>
    </>
  );
};

export default Help;

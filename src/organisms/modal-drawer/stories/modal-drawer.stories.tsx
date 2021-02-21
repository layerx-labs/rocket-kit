import React, { useState } from 'react';
import { ModalDrawerProps } from '..';
import { Button, ModalDrawer, ModalFooter } from '../../..';

export default {
  title: 'Design System/Organisms/Modal',
  component: ModalDrawer,
  argTypes: {},
};

export const ModalDrawerComponent = (args: ModalDrawerProps) => {
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div>
      {!isShowing && (
        <Button
          value={'Open Modal'}
          action={() => {
            setIsShowing(!isShowing);
          }}
        />
      )}
      <ModalDrawer
        {...args}
        isShowing={isShowing}
        hide={() => {
          setIsShowing(false);
        }}
        footer={
          <ModalFooter
            closeValue={'Close'}
            closeAction={() => {
              setIsShowing(false);
            }}
          >
            <Button
              type="submit"
              value={'Checkout'}
              action={() => {
                setIsShowing(false);
              }}
            />
          </ModalFooter>
        }
      >
        <p>
          I'm baby tofu man bun readymade, chartreuse vexillologist pok pok
          retro sriracha drinking vinegar pinterest tumblr lyft venmo vape woke.
          Marfa occupy selfies messenger bag tumblr. Microdosing brooklyn pabst,
          locavore tote bag readymade kombucha. YOLO schlitz salvia lomo
          ethical.
        </p>
        <p>
          Enamel pin VHS vape before they sold out, master cleanse mustache
          farm-to-table selfies pork belly pug poutine selvage mlkshk yuccie
          roof party. Seitan fanny pack meh etsy echo park four loko copper mug
          tilde salvia coloring book gentrify messenger bag. Tote bag
          single-origin coffee cray chillwave distillery, pop-up actually before
          they sold out copper mug fixie pinterest vegan cronut. Food truck
          gochujang jean shorts fashion axe whatever, plaid subway tile seitan
          paleo church-key. Pok pok sartorial biodiesel jianbing quinoa af.
          Authentic franzen iceland enamel pin ennui succulents fam dreamcatcher
          edison bulb irony mustache bitters skateboard ramps. Godard cray
          whatever fam hell of portland kogi typewriter cold-pressed ramps
          williamsburg umami knausgaard ugh.
        </p>
        <p>
          Skateboard selfies food truck shaman, church-key tumeric farm-to-table
          crucifix fingerstache mumblecore thundercats before they sold out.
          Iceland kinfolk 3 wolf moon, fingerstache kogi af fam. Hexagon tumeric
          flannel disrupt la croix shoreditch tattooed mumblecore post-ironic
          irony master cleanse skateboard bitters pork belly. Cold-pressed
          cliche before they sold out taxidermy, activated charcoal craft beer
          wayfarers bespoke marfa PBR&B typewriter street art health goth
          single-origin coffee. DIY edison bulb polaroid austin subway tile,
          butcher echo park yr glossier flexitarian typewriter leggings crucifix
          activated charcoal asymmetrical. Next level intelligentsia mustache,
          photo booth keytar yr venmo typewriter echo park vegan marfa
          readymade. Polaroid retro truffaut hot chicken 8-bit meggings synth.
        </p>
        {/* <p>
          Meggings lyft blog biodiesel leggings hell of. Lyft single-origin
          coffee man braid, celiac craft beer four dollar toast hot chicken
          unicorn thundercats banh mi iPhone migas YOLO venmo. Unicorn pok pok
          cardigan, hashtag master cleanse af intelligentsia small batch retro
          artisan mustache twee sriracha. Ethical schlitz franzen, marfa
          bushwick hella asymmetrical.
        </p> */}
        {/* <p>
          Normcore microdosing pop-up gluten-free squid viral. Forage selvage
          kogi cliche austin, meditation post-ironic selfies leggings. Vinyl
          kickstarter skateboard man braid pitchfork farm-to-table pickled
          chillwave 90's williamsburg YOLO gochujang polaroid ennui. Pickled you
          probably haven't heard of them irony air plant 8-bit chillwave master
          cleanse swag fam 3 wolf moon. Listicle post-ironic seitan godard
          brooklyn try-hard. Literally freegan echo park banh mi XOXO crucifix
          everyday carry small batch vexillologist messenger bag tacos disrupt
          lyft. Farm-to-table four loko humblebrag pop-up yr raclette typewriter
          williamsburg lumbersexual vinyl sriracha skateboard hella 3 wolf moon.
        </p> */}
      </ModalDrawer>
    </div>
  );
};

ModalDrawerComponent.storyName = 'Drawer';
ModalDrawerComponent.args = {
  title: 'Voting Cart Checkout',
  closeValue: 'Close',
};

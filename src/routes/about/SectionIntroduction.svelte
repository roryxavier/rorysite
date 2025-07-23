<script>
  import CardCenterLayout from '@/components/CardCenterLayout.svelte';
</script>

<CardCenterLayout>
  <div class="section-introduction">
    <div>
      <span>Introduction</span>
      <p>
        Start with a brief introduction about yourself. You can mention your furry persona, age, and
        anything else you'd like to share.
      </p>
    </div>

    <div>
      <span>Professional Background</span>
      <p>
        Since you're a Junior Java Software Engineer, you might want to mention your profession and
        what you enjoy about it.
      </p>
    </div>

    <div>
      <span>Programming Interests</span>
      <p>
        Share your programming interests and favorite languages. Given your interest in Python, Go,
        Rust, and JavaScript, you can elaborate on why you enjoy working with these languages.
      </p>
    </div>

    <div>
      <span>Hobbies</span>
      <p>
        Talk about your hobbies, including programming and watching movies. Mention any specific
        genres or favorite movies.
      </p>
    </div>

    <div>
      <span>Goals and Aspirations</span>
      <p>
        Discuss your goals, both personal and professional. Since you mentioned being happy with
        your yellow fox boyfriend as a goal, you could express how important that is to you.
      </p>
    </div>

    <div>
      <span>Furry Fandom</span>
      <p>
        Share your involvement in the furry fandom, how you got into it, and what it means to you.
      </p>
    </div>

    <div>
      <span>Contact Information</span>
      <p>
        Provide contact details or links to your social media profiles so that visitors can connect
        with you.
      </p>
    </div>

    <div>
      <span>Fun Facts</span>
      <p>
        Add some fun facts about yourself that might not be related to programming. This can give
        your audience a more personal insight into who you are.
      </p>
    </div>
  </div>
</CardCenterLayout>

<style lang="scss">
  .section-introduction {
    gap: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    & > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      text-align: start;

      & > span {
        color: var(--primary-color);
        font-weight: 700;
        font-size: 1.2rem;
      }
    }
  }
</style>

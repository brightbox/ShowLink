
describe 'showLink()'

  before_each
    html = $(fixture("fieldset"))
    fieldset = html.find("fieldset")
    fieldset.showLink();

    anchor = html.find("a.show-next-element")
  end

  it 'should hide the fieldset'
    fieldset.should_not.be_visible
  end

  it 'should insert an anchor'
    html.should.have_tag("a.show-next-element")
  end

  it 'should insert the anchor just before the fieldset'
    anchor.next().attr("tagName").toLowerCase().should.be "fieldset"
  end

  it 'should insert the anchor with the text of the fieldset\'s legend'
    anchor_text = html.find("fieldset legend").text()
    anchor.text().should.be anchor_text
  end

  describe 'clicking the link'

    before_each
      anchor.click()
    end

    it 'should show the fieldset'
      fieldset.should.be_visible
    end

    it 'should remove the anchor'
      html.should_not.have_tag("a.show-next-element")
    end

  end
end